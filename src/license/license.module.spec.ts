import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { LicenseModule } from './license.module';
import { License } from './license.entity';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { v4 as uuidv4 } from 'uuid';
describe('Test (e2e) License Module', () => {
    let app: INestApplication;
    const entrypoint = '/graphql';
    interface LicenseInterface {
        _id: number;
        management_name: string;
        management_version: string;
        user_actived_num: number;
        license_buy_date: string;
        license_status: string;
        expired_license_date: string;
        price_license: number;
        price_total: number;
        type_license: string;
        limit_license: number;
        mod_supp_license: string;
        user_id: number;
        payment_method: number;
    }

  
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
                    playground: false,
                }),
                LicenseModule,
            ],
        }).compile(); 

        app = moduleRef.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    }); 

    describe('License Module Tests', () => {
        let createData: LicenseInterface | any;
        it('Create License', async () => {
            const createLicenseMutation = `
                mutation createLicense {
                    createLicense(
                        licenseInput: {
                            management_name: "${uuidv4()}"
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
                });

            createData = response.body.data.createLicense;
        });

        it('Get All License', async () => {
            const getAllLicenzeMutation = `
                query {
                    getAllLicense {
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
                .send({ query: getAllLicenzeMutation })
                .expect(200)
                .expect(res => {
                    expect(res.body.errors).toBeFalsy();
                    expect(res.body.data).toBeDefined();
                    expect(res.body.data.getAllLicense.length).not.toBe(0);
                });

        });

        it('Check If Create License', async () => {
            const findSingleLicense = `
                query {
                    findLicense(
                        licenseSearchInput: {management_name: "${createData.management_name}"}
                    ) {
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
                .send({ query: findSingleLicense })
                .expect(200)
                .expect(res => {
                    expect(res.body.errors).toBeFalsy();
                    expect(res.body.data).toBeDefined();
                    expect(res.body.data.findLicense.length).not.toBe(0);
                });
        });

        it('Update License Data', async () => {
            createData.management_name = uuidv4();

            const updateLicenseMutation = `
                mutation {
                    updateLicense(
  	                    id: ${createData._id}
 	 	                data: {
    	                    management_name: "${createData.management_name}"
  	                    }
	                ) {
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
                .send({ query: updateLicenseMutation })
                .expect(200)
                .expect(res => {
                    expect(res.body.errors).toBeFalsy();
                    expect(res.body.data).toBeDefined();
                    expect(res.body.data.updateLicense.length).not.toBe(0);
                    expect(res.body.data.updateLicense).toMatchObject(createData);
                });
                
        });

        it('Delete License Data', async () => {

            const getAllLicenzeMutation = `
                query {
                    getAllLicense {
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

            const preDeleteData = await request(app.getHttpServer())
                .post(entrypoint)
                .send({ query: getAllLicenzeMutation })
                .expect(200)
                .expect(res => {
                    expect(res.body.errors).toBeFalsy();
                    expect(res.body.data).toBeDefined();
                });


            const lengthAspect:number = preDeleteData.body.data.getAllLicense.length - 1;

            const deleteLicenseMutation = `
                mutation deleteLicense {
                    deleteLicense(licenseDeleteInput: {
                        _id: ${createData._id}
                    })
                }
            `;

            const deleteData = await request(app.getHttpServer())
                .post(entrypoint)
                .send({ query: deleteLicenseMutation })
                .expect(200)
                .expect(res => {
                    expect(res.body.errors).toBeFalsy();
                    expect(res.body.data).toBeDefined();
                    expect(res.body.data.deleteLicense).toBe(true);
                });

            const result = await request(app.getHttpServer())
                .post(entrypoint)
                .send({ query: getAllLicenzeMutation })
                .expect(200)
                .expect(res => {
                    expect(res.body.errors).toBeFalsy();
                    expect(res.body.data).toBeDefined();
                    expect(res.body.data.getAllLicense.length).toBe(lengthAspect);
                });
        });

    });
});