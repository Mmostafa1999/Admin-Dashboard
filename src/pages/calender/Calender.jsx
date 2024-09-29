/* eslint-disable no-unused-vars */
// @ts-nocheck
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Paper, Stack, useMediaQuery } from "@mui/material";
import { useState } from "react";
import "../calender/calender.css";
import { createEventId } from "./event-utils";

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function SidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}

const Calender = () => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible);
  }

  function handleDateSelect(selectInfo) {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  function handleEventClick(clickInfo) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`,
      )
    ) {
      clickInfo.event.remove();
    }
  }

  function handleEvents(events) {
    setCurrentEvents(events);
  }

  return (
    <Stack
      direction={isSmallScreen ? "column" : "row"} // Stack the sidebar and calendar on small screens
      spacing={2}
      sx={{
        width: "100%",
        maxWidth: "100%",
        mx: "auto",
        p: isSmallScreen ? 2 : 4,
      }}>
      <Paper
        className="demo-app-sidebar"
        sx={{
          width: isSmallScreen ? "100%" : "300px",
          p: 2,
        }}>
        <h2 style={{ textAlign: "center" }}>
          All Events ({currentEvents.length})
        </h2>
        <ul>{currentEvents.map(SidebarEvent)}</ul>
      </Paper>

      <div className="demo-app-main" style={{ flex: 1 }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: isSmallScreen
              ? "dayGridMonth,timeGridDay"
              : "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
        />
      </div>
    </Stack>
  );
};

export default Calender;
