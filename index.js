require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./db/database");

connectDb();

// middlewares
app.use(express.json());

// importing routes
const userRoutes = require("./routes/userRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

// user routes
app.use("/api/user", userRoutes);
// reservation routes
app.use("/api/reservation", reservationRoutes);
// appoinment routes
app.use("/api/book-appointment", appointmentRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//http://localhost:9000/api/user