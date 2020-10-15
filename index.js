//const express = require("express");
import express from 'express';
const app = express();
import Database from '@replit/database';
import UsersService from './UsersService.js';

const db = new Database()
const usersService = new UsersService(db);


app.get("/", (req, res) => {
    res.send( "Great to meet you!");
});

app.get("/users", async (req, res) => {
  res.send(await usersService.listUsers());
})

app.listen(8080, () => {
    console.log(`we out here on http://localhost:8080`);
});
