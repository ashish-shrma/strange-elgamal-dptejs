import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const WeeklyCalendar = ({ tasks }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleDateSelect = (arg) => {
    const selectedDate = arg.date;
    const allowedCategories = ['Category A', 'Category B'];
    const allowedQuarters = [1, 3];
    const filteredTasks = tasks.filter(task =>
      allowedCategories.includes(task.category)
      && allowedQuarters.includes(getQuarter(selectedDate))
    );
    if (filteredTasks.length > 0) {
      const randomTask = filteredTasks[Math.floor(Math.random() * filteredTasks.length)];
      setSelectedTask(randomTask);
    } else {
      setSelectedTask(null);
    }
  };

  const getQuarter = (date) => {
    const hours = date.getHours();
    if (hours >= 0 && hours <= 5) {
      return 4;
    } else if (hours >= 6 && hours <= 11) {
      return 1;
    } else if (hours >= 12 && hours <= 17) {
      return 2;
    } else {
      return 3;
    }
  };

  return (
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridWeek"
      weekends={false}
      selectable={true}
      select={handleDateSelect}
      events={[]}
      headerToolbar={{
        start: 'title',
        center: '',
        end: 'today prev,next'
      }}
    />
  );
};

export default WeeklyCalendar;
