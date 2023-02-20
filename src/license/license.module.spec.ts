import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { LicenseModule } from './license.module';
import { License } from './license.entity';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloDriverConfig } from '@nestjs/apollo';
import * as sqlite3 from 'sqlite3';
import * as fs from 'fs';
import { getConnection } from 'typeorm';
describe('Test (e2e) License Module', () => {
    let app: INestApplication;
    const entrypoint = '/graphql';
  
    beforeAll(async () => {
        
        const moduleRef = await Test.createTestingModule({
            imports: [
                TypeOrmModule.forRoot({
                    type: 'sqlite',
                    database: 'db.sqlite',
                    entities: [License],
                    synchronize: true,
                }),

                GraphQLModule.forRoot<ApolloDriverConfig>({
                    driver: ApolloDriver,
                    autoSchemaFile: true,
                    debug: true,
                    playground: false,
                }),
                LicenseModule,
            ],
        }).compile(); 

        app = moduleRef.createNestApplication();
        await app.init();
    });

     afterAll(async () => {
        const conn = getConnection();
        await conn.dropDatabase();
        await conn.close();
        fs.unlinkSync('db.sqlite');
    });

    describe('License Module Tests', () => {
        it('Create License', async () => {
            const createLicenseMutation = `
                mutation createLicense {
                    createLicense(
                        licenseInput: {
                            management_name: "String Management"
                            management_version: "String Version"
                            user_actived_num: 5
                            license_buy_date: "2019-12-03T09:54:33Z"
                            license_status: "String Status"
                            expired_license_date: "2019-12-03T09:54:33Z"
                            price_license: 55
                            price_total: 55
                            type_license: "A"
                            limit_license: 5
                            mod_supp_license: "B"
                            user_id: 1
                            payment_method: 1
                        }
                    ){
                        _id
                        management_name
                        management_version
                        user_actived_num
                        license_buy_date
                        license_status
                        expired_license_date
                        price_license
                        price_total
                        type_license
                        limit_license
                        mod_supp_license
                        user_id
                        payment_method
                    }
                }    
            `;

            const response = await request(app.getHttpServer())
                .post(entrypoint)
                .send({ query: createLicenseMutation })
                .expect(200)
                .expect(res => {
                    expect(res.body.errors).toBeFalsy();
                    expect(res.body.data).toBeDefined();
                    expect(res.body.data.createLicense).toBeDefined();
                    expect(res.body.data.createLicense._id).toBeDefined();
                    console.log(res.body);
                });
        });
    });
});