import { Card, Typography } from "@material-tailwind/react";

export interface AnalyticsItem {
  key: string;
  data: number;
}

interface DefaultTableProps {
  tableHeadData: string[];
  AnalyticsDetails: AnalyticsItem[];
}

export const AnalyticsTable = (props: DefaultTableProps) => {
  const { tableHeadData, AnalyticsDetails } = props;
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {tableHeadData.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {AnalyticsDetails.map(
            (
              {
                key,data,
              },
              index
            ) => {
              const isLast = index === AnalyticsDetails.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {key}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data}
                    </Typography>
                  </td>
                  {/* <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {guardianName}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {guardianContactNumber}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Edit
                    </Typography>
                  </td> */}
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Card>
  );
};
