import {HttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {httpLoaderFactory} from "./http-loader.factory";
import {importProvidersFrom} from "@angular/core";

export const provideTranslate = () => importProvidersFrom(
  TranslateModule.forRoot({
    defaultLanguage: 'en',
    loader: {
      provide: TranslateLoader,
      useFactory: httpLoaderFactory,
      deps: [HttpClient]
    }
  })
);
