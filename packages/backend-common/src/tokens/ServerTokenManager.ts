/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { JWK, JWT } from 'jose';
import { Config } from '@backstage/config';
import { TokenManager } from './types';

export class ServerTokenManager implements TokenManager {
  private key: JWK.OctKey | JWK.NoneKey;

  static noop() {
    return new ServerTokenManager();
  }

  static fromConfig(config: Config) {
    const secret = config.getOptionalString('backend.authorization.secret');
    if (!secret) {
      throw new Error('No backend auth secret set in app-config');
    }
    return new ServerTokenManager(secret);
  }

  private constructor(secret: string = '') {
    this.key = secret ? JWK.asKey({ kty: 'oct', k: secret }) : JWK.None;
  }

  async getServerToken(): Promise<{ token: string }> {
    if (this.key === JWK.None) {
      return { token: '' };
    }

    const jwt = JWT.sign({ sub: 'backstage-server' }, this.key, {
      algorithm: 'HS256',
    });
    return { token: jwt };
  }

  async validateServerToken(token: string): Promise<boolean> {
    if (this.key === JWK.None) {
      return true;
    }

    try {
      JWT.verify(token, this.key);
      return true;
    } catch (e) {
      return false;
    }
  }
}
