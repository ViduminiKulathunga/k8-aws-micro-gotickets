import express from "express";

const router = express.Router();

router.post("/api/users/signin", (req, res) => {
  const { email, passwpord } = req.body;

  


});

export { router as signinRouter };
