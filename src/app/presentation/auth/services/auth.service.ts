import { Injectable } from '@angular/core';
import { API, STORAGE_KEY } from 'src/app/core/configs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { StorageService } from 'src/app/core/services/storage/storage.service';

export interface UserParam {
  username: string;
  password: string;
}

export interface LoginModel {
  token: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService, private readonly storageService: StorageService) {}

  public logIn(params: UserParam) {
    return this.httpService.post<UserParam, LoginModel>(API.login, params, false);
  }

  public async validateAuth(params: UserParam) {
    try {
      const { token } = await this.logIn(params);
      this.storageService.add(STORAGE_KEY.token, token);
    } catch { }
  }
}
