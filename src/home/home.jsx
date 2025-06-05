import { Box, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h2" gutterBottom>
        Добро пожаловать в Todo App exam Umarov Sino!
      </Typography>

      <Typography variant="h5" color="text.secondary" gutterBottom>
        дар инчо ту метавони бо проект шинос шави
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={4}>
        <Button variant="contained" size="large" onClick={() => navigate('/todo')}>
          Перейти к задачам
        </Button>
        <Button variant="outlined" size="large" onClick={() => navigate('/categories')}>
          Перейти к категориям
        </Button>
      </Stack>
    </Box>
  );
}
