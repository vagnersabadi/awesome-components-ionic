## Tinder Cards style page

In order to have the cards swipe effect, follow these instructions:

1 - Install Angular-Swing:
`npm install ionic-swing --save`

2 - In `app.module.ts` add the specific import:
`import {IonicSwingModule} from 'ionic-swing';`

And add `SwingModule` to your NgModule:
```@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicSwingModule <----------
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})```

3 - follow this tutorial: https://github.com/fluster/ionic-swing

4- bug ´Error: Global and doMove´ -> https://github.com/fluster/ionic-swing/issues/9#issuecomment-462636668