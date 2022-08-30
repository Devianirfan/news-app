import { CardActionArea, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Data from "../../data.json"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red, yellow, green } from '@mui/material/colors';
import PostDetail from './PostDetail';

const Post = ({ data }) => {

    const stringSplitter = (string, words) => {
        const substringSplit = string.split(" ").slice(0, words)

        return substringSplit.join(" ")
    }

    const [selectedPost, setSelectedPost] = useState(data[0]);

    return <div>
        <Stack direction="row" justifyContent="center">
            <div style={{ overflowY: "scroll", maxHeight: "100vh", padding: "0 10px" }}>
                {data.map((item, i) => {
                    return <>
                        <Card variant="outlined" key={item.id} sx={{ maxWidth: 800, marginBottom: 1 }}>
                            <CardActionArea onClick={() => {
                                setSelectedPost(item)

                            }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: item.level === "2" ? red[500] : item.level === "1" ? yellow[500] : green[500] }} aria-label="news-navbar">
                                            {" "}
                                        </Avatar>
                                    }
                                    title={item.title}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {stringSplitter(item.body, 15) + "... [weiterlesen]"}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </>
                })}
            </div>
            <div style={{ textAlign: "justify", width: "100%", position: "relative" }}><PostDetail detailData={selectedPost} /></div>
        </Stack>
    </div>
}

export default Post;