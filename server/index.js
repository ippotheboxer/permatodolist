import express from "express";
import cors from "cors";
import pool from "./db.js"

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

//Routes

//Get all todos
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (error) {
        console.log("Error reading database: ", error);
    }
  });

// Get Completed todos
  app.get("/completedtodos", async (req, res) => {
    try {
        const completedtodos = await pool.query("SELECT * FROM completedlist");
        res.json(completedtodos.rows);
    } catch (error) {
        console.log("Error reading database: ", error);
    }
  });

// Create a todo
app.post("/todos", async (req, res) => {
    const {description} = req.body;
    try {
        const newTodo = await pool.query("INSERT INTO todo (task) VALUES ($1) RETURNING *", [description]);
        res.json(newTodo.rows[0]);
      } catch (err) {
        console.log("Error inserting into DB.");
      }
})

//Get a todo
app.get("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const specificToDo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        if (specificToDo.rows.length === 0) {
            res.json(`No todo with ID of ${id} exists.`);
        } else {
           res.json(specificToDo.rows[0]); 
        }
    } catch (error) {
        console.log("Error getting todo with specific ID: ", error);
    }
})

//Update a todo
app.put("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updatedTodo = await pool.query(`UPDATE todo SET todo_id = ${id}, task = '${description}' where todo_id=${id}`);
        res.json("Todo was updated.");
    } catch (error) {
        console.log("Error updating todo with given ID", error);
    }
});


// Delete a todo 
app.delete("/todos/:id", async (req,res) => {
    try {
        const {id} = req.params;
        try {
            const task = await pool.query("SELECT task FROM todo WHERE todo_id = $1", [id]);
            const moveTask = task.rows[0].task;
            const addIntoCompleted = await pool.query("INSERT INTO completedlist (task) VALUES ($1)", [moveTask]);
            console.log("Successfully added into completed todos!");
        } catch (error) {
            console.log("Error adding todo into completed list: ", error);
        }
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Current todo deleted.");
    } catch (error) {
        console.log("Error deleting todo: ", error)
    }
})



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
