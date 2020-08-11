# Pipes Intro

Como su nombre lo indica funcionan como una tubería donde se transforma el dato recibido por otro (_solo visualmente, no existe mutación ni cambios en el valor original_) y depende de la lógica de cada Pipe.

## Pipes nativos:

- Pipes uppercase y lowercase
- Pipe Slice
- Pice Decimal
- Pipe Percent
- Pipe Currency
- Pipe Json
- Pipe Async
- Pipe Date

Y por otro lado pipes personalizados.
los pipes personalizados se pueden crear a través del CLI de angular usando el siguiente comando

```
$ ng g p [path]/pipe-name
```

## Los pipes personalizados

Los pipe utilizan el decorador con el mismo nombre y con la propiedad name se identifican para ser utilizados en el HTML

```
@Pipe({
  name: 'myOwnPipe'
})
```

## Usos

```
<p>{{ variable | uppercase}}</p>
```

_Tranforma el valor de la variable en mayúsculas_

```
<p>{{ variable | slice : 0 : 20}}</p>
```

_Muestra la candena original desde el carácter en la posición 0 hasta el carácter en la posición 20_

## Uso con parámetros

_Forma genérica_

```
<p>{{ variable | [pipes-name that accept params]: ...params }}</p>
```

_Por ejemplo pipe number_

```
<p>{{ PI | number:'[integerNumbers].[decimalStart]-[decimalEnd]' }}</p>
```

_Práctica_

```
<p>{{ PI | number:'1.0-4' }}</p>
// 3.1416
```

## Pipe JSON

```
<p>{{ person | json }}</p>
```

_Muestra un objeto en formato json_

```
{
  "name": "viviramji",
  "address": "Street 55 state, zip, country",
  "phone": "000 000 0000"
}
```

## Pipe Async

```
// app.component.ts file
promiseValue = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve('Done!');
  }, 4000);
});
```

_Muestra lo que resuelve una promesa_

Documentación oficial

- [AsyncPipe](https://angular.io/api/common/AsyncPipe)
- [DecimalPipe](https://angular.io/api/common/DecimalPipe)
- [PercentPipe](https://angular.io/api/common/PercentPipe)
- [DatePipe](https://angular.io/api/common/DatePipe)
- [TitleCasePipe](https://angular.io/api/common/TitleCasePipe)
- [UpperCasePipe](https://angular.io/api/common/UpperCasePipe)
- [CurrencyPipe](https://angular.io/api/common/CurrencyPipe)
- [I18nPluralPipe](https://angular.io/api/common/I18nPluralPipe)
- [I18nSelectPipe](https://angular.io/api/common/I18nSelectPipe)
- [JsonPipe](https://angular.io/api/common/JsonPipe)
- [KeyValuePipe](https://angular.io/api/common/KeyValuePipe)
- [SlicePipe](https://angular.io/api/common/SlicePipe)
- [LowerCasePipe](https://angular.io/api/common/LowerCasePipe)
