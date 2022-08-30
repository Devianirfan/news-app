import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { green, red, yellow } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';

const PostDetail = ({ detailData }) => {

    if (!detailData) return <div>Detail data not found! Check the data.</div>

    return (
        <Card variant="outlined" key={detailData.id} sx={{ maxHeight: "100vh", padding: "10px 20px", overflowY: "scroll" }}>

            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: detailData.level === "2" ? red[500] : detailData.level === "1" ? yellow[500] : green[500] }} aria-label="news-navbar">
                        {" "}
                    </Avatar>
                }
                title={detailData.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {detailData.body}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Url Action:
                </Typography>
            </CardContent>
            <CardContent>
                {detailData.url_action.map((item) => {
                    return <li>
                        <a href={item.url}>{item.title}</a>
                    </li>
                })}
            </CardContent>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Url Explanation:
                </Typography>
            </CardContent>
            <CardContent>
                {detailData.url_explanation.map((item) => {
                    return <li>
                        <a href={item.url}>{item.title}</a>
                    </li>
                })}
            </CardContent>
        </Card>
    );
};

export default PostDetail;