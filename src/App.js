import "./styles.css";

import React, { useState } from "react";
import TaskList from "./TaskList.js";
import WeeklyCalendar from "./WeeklyCalendar.js";

function App() {
  const [events, setEvents] = useState([]);

  function handleAddEvent(event) {
    setEvents([...events, event]);
  }

  function handleEventDrop({ event, start, end }) {
    const updatedEvent = { ...event, start, end };
    const index = events.findIndex((e) => e.id === event.id);
    setEvents([
      ...events.slice(0, index),
      updatedEvent,
      ...events.slice(index + 1),
    ]);
  }

  function handleSelectSlot({ start, end }) {
    const id = Math.max(...events.map((e) => e.id), 0) + 1;
    const event = { id, title: "New Event", start, end };
    setEvents([...events, event]);
  }

  const constraints = {
    Meditation: [1, 2, 3, 4],
    Workout: [1, 2, 3, 4],
    SideProject: [1, 2, 3, 4],
  };

  const [tasks, setTasks] = useState([
    { name: "Task 1", category: "Category A", time: "30 min" },
    { name: "Task 2", category: "Category A", time: "45 min" },
    { name: "Task 3", category: "Category B", time: "60 min" },
    { name: "Task 4", category: "Category B", time: "15 min" },
    { name: "Task 5", category: "Category C", time: "90 min" },
  ]);

  return (
    <div className="App">
      <TaskList addTask={handleAddEvent} tasks={tasks} />
      <WeeklyCalendar
        events={events}
        handleEventDrop={handleEventDrop}
        handleSelectSlot={handleSelectSlot}
        constraints={constraints}
      />
    </div>
  );
}

export default App;
