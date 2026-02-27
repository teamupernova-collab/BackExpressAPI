import { Request, Response } from "express";
import mongoose from "mongoose";
import { PersonSchemaVali } from "../models/person";
import Person from "../models/person";

class personController {
    addPerson = async (req: Request, res: Response) => {
        const { error } = PersonSchemaVali.validate(req.body);

        if (error) {
        res.send(error.message);
        return;
        }

        try {
        const { name, lastname } = req.body;
        const newPerson = await Person.create({ name, lastname });
        res.status(201).send(newPerson);
        } catch (error) {
        console.log(error);
        res
            .status(500)
            .send({
            code: "INTERNAL_SERVER_ERROR",
            msg: "An error occurred while creating the person.",
            });
        }
    }

    getPersons = async (req: Request, res: Response) => {
        try {
            const persons = await Person.find();
            res.send(persons);
        } catch (error) {
            console.log(error);
            res
                .status(500)
                .send({
                code: "INTERNAL_SERVER_ERROR",
                msg: "An error occurred while fetching persons.",
                });
        }
    }

    getPersonById = async (req: Request, res: Response) => {
        const id = req.params.id;
        try {
            const person = await Person.findById(id);
            if (!person) {
                res.status(404).send({ code: "NOT_FOUND", msg: "Person not found." });
                return;
            }
            res.send(person);
        } catch (error) {
            console.log(error);
            res
                .status(500)
                .send({
                code: "INTERNAL_SERVER_ERROR",
                msg: "An error occurred while fetching the person.",
                });
        }
    }

    updatePerson = async (req: Request, res: Response) => {
        const id = req.params.id;
        try {
            const personU = await Person.findByIdAndUpdate(id, req.body, {
                new: true,
            });

            if (!personU) {
                res.status(404).send({ code: "NOT_FOUND", msg: "Person not found." });
                return;
            }

            res.send(personU);
        } catch (error) {
            console.log(error);
            res
                .status(500)
                .send({
                code: "INTERNAL_SERVER_ERROR",
                msg: "An error occurred while updating the person.",
                });
        }

    }

    deletePerson = async (req: Request, res: Response) => {
        const id = req.params.id;
        try {
            const personD = await Person.findByIdAndDelete(id);
            if (!personD) {
                res.status(404).send({ code: "NOT_FOUND", msg: "Person not found." });
                return;
            }
            res.send({ code: "SUCCESS", msg: "Person deleted successfully." });
        } catch (error) {
            console.log(error);
            res
                .status(500)
                .send({
                code: "INTERNAL_SERVER_ERROR",
                msg: "An error occurred while deleting the person.",
                });
        }   
    }
};

export const personControllers = new personController();