import { rest } from "msw";
import { data } from "./data";

let groceries = data;

export const handlers = [
  rest.get("http://localhost:4000/groceries", (req, res, ctx) => {
    return res(ctx.json(groceries));
  }),
  rest.post("http://localhost:4000/groceries", (req, res, ctx) => {
    const id = groceries[groceries.length - 1]?.id + 1 || 1;
    const grocery = { id, ...req.body };
    groceries.push(grocery);
    return res(ctx.json(grocery));
  }),
  rest.delete("http://localhost:4000/groceries/:id", (req, res, ctx) => {
    const { id } = req.params;
    if (isNaN(parseInt(id))) {
      return res(ctx.status(404), ctx.json({ message: "Invalid ID" }));
    }
    groceries = groceries.filter((q) => q.id !== parseInt(id));
    return res(ctx.json({}));
  }),
  rest.patch("http://localhost:4000/groceries/:id", (req, res, ctx) => {
    const { id } = req.params;
    const { isBought } = req.body;
    const grocery = groceries.find((q) => q.id === parseInt(id));
    if (!grocery) {
      return res(ctx.status(404), ctx.json({ message: "Invalid ID" }));
    }
    grocery.isBought = isBought;
    return res(ctx.json(grocery));
  }),
];
