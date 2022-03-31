import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Customer, { CustomerDocument } from './schemas/customer.schema';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const createdCustomer = new this.customerModel({
      ...createCustomerDto,
    });
    return createdCustomer.save();
  }

  async update(
    id: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise</*UpdateResult*/ any> {
    return this.customerModel.updateOne({ _id: id }, updateCustomerDto);
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }

  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.customerModel.deleteOne({ _id: id });
  }
}
