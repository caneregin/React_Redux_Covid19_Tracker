# React Redux Covid19 Tracker

## Yayınlandı: https://gilded-axolotl-1c1231.netlify.app/

## Açılış ekranı
![cvd19tracker](https://user-images.githubusercontent.com/36435160/188710801-0deeaf3b-e1bf-480f-aafc-1d85d54c2aad.png)

## infected, recovered, deaths, active, lastUpdate verileri useSelector ile redux tarafından çekilir. useEffect axios ile apiden veri çekilir. Gelen veri dispatch aracılığıyla redux tarafında api reducer ile karşılanır. Ülke değiştiğinde useEffect tekrar render edilir ve yeni ülke bilgileri çağırılır. 4 tane card yapılmıştır. useSelector aracılığıyla gelen verilir burada gösterilir.
![cvd19tracker1](https://user-images.githubusercontent.com/36435160/188712127-60ba5316-8325-4e35-adc1-e1ea44c3f041.png)

## Formik kullanılmıştır. initial value Turkey verilmiştir. Bir ülke seçilip submit tıklandığında setCountry ile country içerisine seçilen ülke kaydedilir.
![cvd19tracker2](https://user-images.githubusercontent.com/36435160/188712735-e4d0b0f5-443d-488b-956a-aec77ab50e82.png)

## Grafikler için react chart js 2 kullanılmıştır. useSelector ile veriler çekilir. data içerisine veriler yazılır. Her bir veri için renk verilir. div içerisinde grafik sergilenir.
![cvd19tracker3](https://user-images.githubusercontent.com/36435160/188713186-3755c54a-d1e4-4e82-bf2f-63f3c9cdf724.png)

## initial state infected, recovered, deaths, active, lastUpdate olarak tanımlanmıştır. Reducer api ile karşılanan veriler her bir state içerisine kaydedilir.
![cvd19tracker4](https://user-images.githubusercontent.com/36435160/188713364-b28f7189-5609-4e57-af26-e3bfb8a904d2.png)

## Redux store
![cvd19tracker5](https://user-images.githubusercontent.com/36435160/188713383-89b28ca7-5e95-4c23-ab0b-f8cec9212338.png)
