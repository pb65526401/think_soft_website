// src/Pages/solutions/TaskManager.jsx
import React from 'react';

const TaskManager = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Task Manager</h1>
      <p className="text-gray-600 max-w-3xl">
        ThinkSoft’s Task Manager is a smart workflow automation tool that helps teams plan, assign, track, and complete tasks efficiently—without switching between apps.
      </p>
      <p className="text-gray-600 mt-4 max-w-3xl">
        Built on the Microsoft Power Platform, it connects with your existing systems (email, calendars, ERP) and uses AI to suggest priorities, predict delays, and generate performance reports—keeping your projects on track.
      </p>
    </div>
  );
};

export default TaskManager;