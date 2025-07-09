import React, { useEffect, useState } from 'react';
import bg from '../assets/bg.jpg';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    Avatar,
    Typography,
    Paper,
    TextField,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Slider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const genres = [
    'Dance Beat',
    'Electro Pop',
    'Alternative Indie',
    'Hip Hop',
    'Classical Period',
    'Rap',
];

const Dashboard2 = () => {
    const [topArtists, setTopArtists] = useState([]);
    const [topCharts, setTopCharts] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('https://beats-5dm9.onrender.com/api/music');
                const responseArtist = await fetch('https://beats-5dm9.onrender.com/api/artist');
                const data = await response.json();
                const dataArtist = await responseArtist.json();
                setTopCharts(data.data);
                setTopArtists(dataArtist.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchdata();
    }, []);

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', width: '100vw', bgcolor: '#000' }}>
            {/* LEFT MAIN SECTION */}
            <Box sx={{ flex: 1 }}>
                {/* NAVBAR */}
                <AppBar position="static" elevation={1} sx={{ bgcolor: 'inherit', p: 2 }}>
                    <Toolbar>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button>MUSIC</Button>
                            <Button color="inherit">PODCAST</Button>
                            <Button color="inherit">LIVE</Button>
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <TextField
                                size="small"
                                variant="outlined"
                                placeholder="Type here to search"
                                InputProps={{
                                    startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />,
                                    sx: { bgcolor: 'grey', borderRadius: 2, minWidth: 220 },
                                }}
                            />
                            <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, bgcolor: '#545454', borderRadius: 4 }}>
                                <Avatar src="https://via.placeholder.com/30" />
                                <Typography variant="body1" sx={{ ml: 1 }}>Dave Cooper</Typography>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>

                {/* HERO SECTION */}
                <Paper
                    elevation={2}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        p: 3,
                        mb: 4,
                        backgroundImage: `url('${bg}')`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '42vh',
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="p" color="#fff" gutterBottom>
                            Trending New Hits
                        </Typography>
                        <Typography variant="h3" color="#fff" sx={{ fontWeight: 700 }}>
                            In My Feelings
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                            Camila Cabello • 63Million Plays
                        </Typography>
                        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                            Listen Now
                        </Button>
                    </Box>
                    <Box>
                        <img
                            src="https://via.placeholder.com/200x300"
                            alt="camila"
                            style={{ borderRadius: 16, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
                        />
                    </Box>
                </Paper>

                {/* TOP ARTISTS */}
                <Box sx={{ mb: 4, p: 3 }}>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: '#fff' }}>
                        Top Artists
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        {topArtists.map(({ name, plays, avatar }, i) => (
                            <Box
                                key={i}
                                sx={{
                                    flex: '1 0 16%',
                                    minWidth: 120,
                                    maxWidth: 200,
                                }}
                            >
                                <Paper sx={{ p: 2, textAlign: 'center', color: '#fff', borderRadius: 3, bgcolor: '#18181c' }}>
                                    <Avatar
                                        src={avatar}
                                        alt={name}
                                        sx={{ width: 60, height: 60, mx: 'auto', mb: 1 }}
                                    />
                                    <Typography variant="subtitle1">{name}</Typography>
                                    <Typography variant="caption" color="#fff">
                                        {plays}M Plays
                                    </Typography>
                                </Paper>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* GENRES + TOP CHARTS */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, padding: '0 3rem', flexWrap: 'wrap' }}>
                    {/* Genres */}
                    <Box sx={{ flex: '1 1 50%', minWidth: 300, Width: '100%' }}>
                        <Paper sx={{ p: 2, borderRadius: 3, bgcolor: '#18181c', maxWidth: '100%' }}>
                            <Typography variant="h6" sx={{ mb: 2, color: '#fff' }}>Genres</Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {genres.map((genre, i) => (
                                    <Button
                                        key={i}
                                        variant="outlined"
                                        color="primary"
                                        sx={{
                                            borderRadius: 4,
                                            p: 4,
                                            textTransform: 'none',
                                            bgcolor: 'purple',
                                            color: '#fff',
                                            fontSize: '16px',
                                            fontWeight: 'normal',
                                            border: 'none',
                                        }}
                                    >
                                        {genre}
                                    </Button>
                                ))}
                            </Box>
                        </Paper>
                    </Box>
                    {/* Top Charts */}
                    <Box sx={{ flex: '1 1 50%', minWidth: 300 }}>
                        <Paper
                            sx={{
                                p: 2,
                                borderRadius: 3,
                                bgcolor: '#18181c',
                                color: '#fff',
                            }}
                        >
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                Top Charts
                            </Typography>
                            <List>
                                {topCharts.map(({ name, duration, cover }, i) => (
                                    <ListItem
                                        key={i}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            px: 0,
                                            py: 0.5,
                                        }}
                                    >
                                        {/* Serial number */}
                                        <Typography variant="body1" sx={{ minWidth: 32, mr: 2 }}>
                                            {`0${i + 1}`}
                                        </Typography>
                                        {/* Avatar */}
                                        {cover && (
                                            <Avatar
                                                src={cover}
                                                alt={name}
                                                sx={{ width: 48, height: 48, mr: 2, borderRadius: 20 }}
                                            />
                                        )}
                                        {/* Music name and duration */}
                                        <ListItemText
                                            primary={
                                                <Typography variant="body1">
                                                    {name}
                                                </Typography>
                                            }
                                            secondary={<Typography variant="body2" color="#fff">
                                                {duration}
                                            </Typography>}
                                            sx={{ flex: 1 }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Box>
                </Box>
            </Box>

            {/* RIGHT SIDEBAR PLAYER */}
            <Box sx={{
                height: 'auto',
                width: '300px',
                bgcolor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2
            }}>
                <Box sx={{ boxShadow: '0 5px 30px rgba(255, 255, 255, 0.2)' }}>
                    <Paper sx={{ bgcolor: 'inherit', borderRadius: 3 }}>
                        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar
                                src="https://via.placeholder.com/300"
                                alt="Now Playing"
                                sx={{ width: 100, height: 100, mb: 2 }}
                            />
                            <Typography variant="h6" sx={{ mb: 1, color: '#fff' }}>
                                Now Playing
                            </Typography>
                            <Typography variant="subtitle1" sx={{ mb: 2, color: '#fff' }}>
                                In My Feelings - Camila Cabello
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <IconButton color="primary">
                                    <SkipPreviousIcon />
                                </IconButton>
                                <IconButton color="primary">
                                    <PlayArrowIcon fontSize="large" />
                                </IconButton>
                                <IconButton color="primary">
                                    <SkipNextIcon />
                                </IconButton>
                            </Box>
                            <Slider
                                defaultValue={30}
                                aria-label="Volume"
                                valueLabelDisplay="auto"
                                sx={{ width: '80%', mt: 2 }}
                            />
                        </Box>
                    </Paper>
                </Box>

            </Box>
        </Box >
    );
};

export default Dashboard2;
