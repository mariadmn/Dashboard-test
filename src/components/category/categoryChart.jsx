import { Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../themes";
import Header from "../header";
import {categoryChartData} from "../../data/chartData";
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from 'recharts';
import React, { useState, useCallback } from 'react';
import { Typography } from '@mui/material';
import TableViewIcon from '@mui/icons-material/TableView';
import IconButton from "@mui/material/IconButton";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { CSVLink } from "react-csv";
import { Chart } from "react-google-charts";

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.categoria}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill={fill}
        >{`Total: ${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill={fill}
        >
          {`(${payload.porcentagem}%)`}
        </text>
      </g>
    );
  };


export default function CategoryChart(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const chartColors = [colors.blueAccent[500], colors.greenAccent[500], colors.redAccent[500], colors.blueAccent[700], colors.orangeAccent[500]];
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
      (_, index) => {
      setActiveIndex(index);
      },
      [setActiveIndex]
  );

  return (
    <div style={{ width: "100%", height: 500 }}>
      <Box >
        <Header title="Categoria de Publicação" 
          subtitle="Gráfico das categorias dos artigos" />
    
        {/* <Typography variant="h5" color={colors.primary[100]} justifySelf="center" marginTop={10}>
          Total de artigos: {categoryChartData.reduce((total, item) => total + item.total, 0)}
        </Typography> */}
        <IconButton onClick={props.toggleBool} sx={ {color: colors.primary[100], "&:hover": { backgroundColor: "transparent" }}}>
          <TableViewIcon/><h5> Ver tabela</h5>
        </IconButton>
        <CSVLink filename={"categoryChart.csv"} data={categoryChartData}>
          <IconButton sx={ {color: colors.primary[100], "&:hover": { backgroundColor: "transparent" }}}>
            <FileDownloadIcon /><h5>CSV</h5>
          </IconButton>
        </CSVLink>
      </Box>
      <ResponsiveContainer>
        <PieChart width={600} height={500}>
            <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                dataKey="total"
                data={categoryChartData}
                cx={300}
                cy={200}
                innerRadius={110}
                outerRadius={170}
                onMouseEnter={onPieEnter}
            >
                {categoryChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                ))}
            </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
