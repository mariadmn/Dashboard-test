
import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../themes";
import Header from "./header";
import { Box } from "@mui/material";
// import { yearChartData} from "../data/chartData";
const data = [
    {
      "country": "AD",
      "hot dog": 2,
      "hot dogColor": "hsl(342, 70%, 50%)",
      "burger": 159,
      "burgerColor": "hsl(262, 70%, 50%)",
      "sandwich": 194,
      "sandwichColor": "hsl(69, 70%, 50%)",
      "kebab": 184,
      "kebabColor": "hsl(77, 70%, 50%)",
      "fries": 50,
      "friesColor": "hsl(55, 70%, 50%)",
      "donut": 156,
      "donutColor": "hsl(99, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 15,
      "hot dogColor": "hsl(256, 70%, 50%)",
      "burger": 63,
      "burgerColor": "hsl(342, 70%, 50%)",
      "sandwich": 18,
      "sandwichColor": "hsl(123, 70%, 50%)",
      "kebab": 185,
      "kebabColor": "hsl(74, 70%, 50%)",
      "fries": 178,
      "friesColor": "hsl(75, 70%, 50%)",
      "donut": 104,
      "donutColor": "hsl(213, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 61,
      "hot dogColor": "hsl(37, 70%, 50%)",
      "burger": 13,
      "burgerColor": "hsl(20, 70%, 50%)",
      "sandwich": 167,
      "sandwichColor": "hsl(88, 70%, 50%)",
      "kebab": 137,
      "kebabColor": "hsl(261, 70%, 50%)",
      "fries": 150,
      "friesColor": "hsl(282, 70%, 50%)",
      "donut": 156,
      "donutColor": "hsl(319, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 168,
      "hot dogColor": "hsl(45, 70%, 50%)",
      "burger": 2,
      "burgerColor": "hsl(47, 70%, 50%)",
      "sandwich": 6,
      "sandwichColor": "hsl(0, 70%, 50%)",
      "kebab": 111,
      "kebabColor": "hsl(131, 70%, 50%)",
      "fries": 161,
      "friesColor": "hsl(212, 70%, 50%)",
      "donut": 27,
      "donutColor": "hsl(124, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 116,
      "hot dogColor": "hsl(76, 70%, 50%)",
      "burger": 53,
      "burgerColor": "hsl(332, 70%, 50%)",
      "sandwich": 148,
      "sandwichColor": "hsl(359, 70%, 50%)",
      "kebab": 164,
      "kebabColor": "hsl(105, 70%, 50%)",
      "fries": 78,
      "friesColor": "hsl(319, 70%, 50%)",
      "donut": 23,
      "donutColor": "hsl(100, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 153,
      "hot dogColor": "hsl(305, 70%, 50%)",
      "burger": 172,
      "burgerColor": "hsl(244, 70%, 50%)",
      "sandwich": 154,
      "sandwichColor": "hsl(272, 70%, 50%)",
      "kebab": 199,
      "kebabColor": "hsl(14, 70%, 50%)",
      "fries": 54,
      "friesColor": "hsl(67, 70%, 50%)",
      "donut": 160,
      "donutColor": "hsl(99, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 68,
      "hot dogColor": "hsl(177, 70%, 50%)",
      "burger": 13,
      "burgerColor": "hsl(61, 70%, 50%)",
      "sandwich": 130,
      "sandwichColor": "hsl(285, 70%, 50%)",
      "kebab": 72,
      "kebabColor": "hsl(213, 70%, 50%)",
      "fries": 32,
      "friesColor": "hsl(323, 70%, 50%)",
      "donut": 14,
      "donutColor": "hsl(82, 70%, 50%)"
    }
]

const YearChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    <Box  m="20px">
        <Header title="Ano de Publicação" 
        subtitle="Gráfico com os anos de publicação dos artigos e quantos desse artigos estavam na temática pesquisada" />
        <Box display="flex" height="500px" width="100%">
            <ResponsiveBar
                data={data}
                theme={{
                    // added
                    axis: {
                        domain: {
                            line: {
                                stroke: colors.grey[100],
                            },
                        },
                        legend: {
                            text: {
                                fill: colors.grey[100],
                            },
                        },
                        ticks: {
                            line: {
                                stroke: colors.grey[100],
                                strokeWidth: 1,
                            },
                            text: {
                                fill: colors.grey[100],
                            },
                        },
                },
                legends: {
                    text: {
                    fill: colors.grey[100],
                    },
                },
                }}
                keys={[
                    'hot dog',
                    'burger',
                    'sandwich',
                    'kebab',
                    'fries',
                    'donut'
                ]}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                groupMode="grouped"
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'purpleRed_green' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{ theme: 'background' }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={false}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
            />
        </Box>
    </Box>
};

export default YearChart;


