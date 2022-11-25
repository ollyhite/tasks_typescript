import React, { FC, ReactElement, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskTitleField } from './_taskTitleField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';
import { Priority } from './enums/Priority';
import { Status } from './enums/Status';

export const CreateTaskForm: FC = (): ReactElement => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(
    Priority.normal,
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
      </Stack>
      <Stack
        sx={{ width: '100%' }}
        direction="row"
        spacing={2}
      >
        <TaskSelectField
          label="Status"
          name="status"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as string)
          }
          items={[
            {
              value: Status.todo,
              label: Status.todo.toUpperCase(),
            },
            {
              value: Status.inProgress,
              label: Status.inProgress.toUpperCase(),
            },
          ]}
        />
        <TaskSelectField
          label="Priority"
          name="priority"
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as string)
          }
          items={[
            {
              value: Priority.low,
              label: Priority.low,
            },
            {
              value: Priority.normal,
              label: Priority.normal,
            },
            {
              value: Priority.high,
              label: Priority.high,
            },
          ]}
        />
      </Stack>
      {/*Task Date*/}
      {/*Task Status*/}
      {/*Task Priority*/}
    </Box>
  );
};
