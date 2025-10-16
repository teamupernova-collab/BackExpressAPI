import { Request, Response } from "express";
import tag, { TagSchemaVali } from "../models/tag";
import project from "../models/project";

class tagController {
  addTag = async (req: Request, res: Response) => {
    const { error } = TagSchemaVali.validate(req.body);

    if (error) {
      res.send(error.message);
      return;
    }

    try {
      const newTask = await tag.create(req.body);
      res.status(201).send(newTask);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        code: "INTERNAL_SERVER_ERROR",
        msg: "An error occurred while creating the tag.",
      });
    }
  };

  getTags = async (req: Request, res: Response) => {
    try {
      const tags = await tag.find();
      res.status(200).send(tags);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        code: "INTERNAL_SERVER_ERROR",
        msg: "An error occurred while fetching tags.",
      });
    }
  };

  getATag = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const tags = await tag.findById(id);
      res.status(200).send(tags);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        code: "INTERNAL_SERVER_ERROR",
        msg: "An error occurred while fetching the tag.",
      });
    }
  };

  updateTag = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const tagU = await tag.findByIdAndUpdate(id, req.body, { new: true });
      if (!tagU) {
        res.send({ code: "NOT_FOUND", msg: "tag not found" });
      }
      res.send(tagU);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        code: "INTERNAL_SERVER_ERROR",
        msg: "An error occurred while updating the tag.",
      });
    }
  };

  deleteTag = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const tagD = await tag.findByIdAndDelete(id);
      if (!tagD) {
        res.send({ code: "NOT_FOUND", msg: "tag not found" });
      }

      const result = await project.updateMany(
        { tags: { $elemMatch: { _id: id } } },
        { $pull: { tags: { _id: id } } }
      );
      

      res.send({ code: "COMPLETED", msg: "tag delete" });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        code: "INTERNAL_SERVER_ERROR",
        msg: "An error occurred while deleting the tag.",
      });
    }
  };
}

export const tagControllers = new tagController();
