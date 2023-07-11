import { Module } from '@nestjs/common';
import { x } from 'shared'

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor () {
    console.log(x)
  }
}
