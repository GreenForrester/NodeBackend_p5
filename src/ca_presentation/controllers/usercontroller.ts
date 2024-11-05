// src/presentation/controllers/UserController.ts
import { Request, Response } from 'express';
import {UserService} from '../../ca_application/services/user_services';
import { HttpStatusCode } from '../middleware/errorhandling/httpstatuscodes';
import { HttpStatusMessages} from '../middleware/errorhandling/httpstatusmessages';
import { ControllerBase } from './controllerbase';
import logger from '../../ca_infrastructure/logging/logger';


export class UserController extends ControllerBase
{

  private userServices: UserService;

  constructor() 
  {
    super(); //base class contains handleerror
    this.userServices = new UserService(); 
  }
  
  async getAllUsers(req: Request, res: Response) 
  {
    logger.log({level: "info", message: "getAll Customers called"});
    try 
    {
      const user = await this.userServices.getAllUsers();
      res.status(HttpStatusCode.OK).json(user);
    } 
    catch (error)
    {
      console.log("Error Happend in getAllCustomer");
      throw this.handleError(error as Error, this.constructor.name);
    }
  }

  async getUserById(req: Request, res: Response) 
  { 
    try 
    {
      const user = await this.userServices.getUserById(req.params.id);
      res.status(HttpStatusCode.OK).json(user);
    } 
    catch (error)
    {
      throw this.handleError(error as Error, this.constructor.name);
    }
  }

  async getUserByName(req: Request, res: Response) 
  {
    console.log("controller getUserByName called");
    try 
    {
      const user = await this.userServices.getUserByUsername(req.params.name);
      res.status(HttpStatusCode.OK).json(user);
    } 
    catch (error)
    {
      throw this.handleError(error as Error, this.constructor.name);
    }
  }


  async updateUser(req: Request, res: Response) 
  {
    try 
    {
      const user = await this.userServices.updateUser(req.params.id, req.body);
      res.status(HttpStatusCode.OK).json(user);
    } 
    catch (error) 
    {
      throw this.handleError(error as Error, this.constructor.name);
    }
  }

  async deleteUser(req: Request, res: Response) 
  {
    try 
    {
      await this.userServices.deleteUser(req.params.id);
      res.status(HttpStatusCode.DELETED).json(HttpStatusMessages[HttpStatusCode.DELETED]);
    } 
    catch (error) 
    {
      throw this.handleError(error as Error, this.constructor.name);
    }
  }

}