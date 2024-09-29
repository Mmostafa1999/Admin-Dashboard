import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "france",
    color: "hsl(26, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 203,
      },
      {
        x: "helicopter",
        y: 185,
      },
      {
        x: "boat",
        y: 15,
      },
      {
        x: "train",
        y: 100,
      },
      {
        x: "subway",
        y: 179,
      },
      {
        x: "bus",
        y: 244,
      },
      {
        x: "car",
        y: 51,
      },
      {
        x: "moto",
        y: 263,
      },
      {
        x: "bicycle",
        y: 134,
      },
      {
        x: "horse",
        y: 206,
      },
      {
        x: "skateboard",
        y: 141,
      },
      {
        x: "others",
        y: 85,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(253, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 44,
      },
      {
        x: "helicopter",
        y: 109,
      },
      {
        x: "boat",
        y: 1,
      },
      {
        x: "train",
        y: 83,
      },
      {
        x: "subway",
        y: 207,
      },
      {
        x: "bus",
        y: 74,
      },
      {
        x: "car",
        y: 196,
      },
      {
        x: "moto",
        y: 102,
      },
      {
        x: "bicycle",
        y: 111,
      },
      {
        x: "horse",
        y: 224,
      },
      {
        x: "skateboard",
        y: 237,
      },
      {
        x: "others",
        y: 115,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(351, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 154,
      },
      {
        x: "helicopter",
        y: 86,
      },
      {
        x: "boat",
        y: 300,
      },
      {
        x: "train",
        y: 298,
      },
      {
        x: "subway",
        y: 31,
      },
      {
        x: "bus",
        y: 228,
      },
      {
        x: "car",
        y: 263,
      },
      {
        x: "moto",
        y: 295,
      },
      {
        x: "bicycle",
        y: 260,
      },
      {
        x: "horse",
        y: 84,
      },
      {
        x: "skateboard",
        y: 284,
      },
      {
        x: "others",
        y: 149,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(70, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 213,
      },
      {
        x: "helicopter",
        y: 40,
      },
      {
        x: "boat",
        y: 246,
      },
      {
        x: "train",
        y: 59,
      },
      {
        x: "subway",
        y: 81,
      },
      {
        x: "bus",
        y: 119,
      },
      {
        x: "car",
        y: 133,
      },
      {
        x: "moto",
        y: 71,
      },
      {
        x: "bicycle",
        y: 58,
      },
      {
        x: "horse",
        y: 100,
      },
      {
        x: "skateboard",
        y: 44,
      },
      {
        x: "others",
        y: 246,
      },
    ],
  },
];
// eslint-disable-next-line react/prop-types
const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      <ResponsiveLine
        data={data}
        curve="catmullRom"
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "Count",
          legendOffset: -44,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default LineChart;
