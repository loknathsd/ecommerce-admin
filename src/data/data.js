import avatar from '../images/avatar.jpg'
import avatar2 from '../images/avatar2.jpg'
import avatar3 from '../images/avatar3.png'
import avatar4 from '../images/avatar4.jpg'

const customerGridStatus = (props) => (
    <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
        <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
        <p>{props.Status}</p>
    </div>
);
const customerGridImage = (props) => (
    <div className="flex gap-4">
        {/* <img
            className="rounded-full w-10 h-10"
            src={props.CustomerImage}
            alt="employee"
        /> */}
        <div>
            <p>{props.CustomerName}</p>
            <p>{props.CustomerEmail}</p>
        </div>
    </div>
);
export const customersGrid = [
    { type: 'checkbox', width: '50' },
    {
        field: 'CustomerName',
        headerName: 'Customer Name',
        width: '150',
        textAlign: 'Center'
    },
    {
        field: 'ProjectName',
        headerName: 'Project Name',
        width: '150',
        textAlign: 'Center'
    },
    {
        field: 'Status',
        headerName: 'Status',
        width: '130',
        format: 'yMd',
        textAlign: 'Center',
        template: customerGridStatus
    },
    {
        field: 'Weeks',
        headerName: 'Weeks',
        width: '100',
        format: 'C2',
        textAlign: 'Center'
    },
    {
        field: 'Budget',
        headerName: 'Budget',
        width: '100',
        format: 'yMd',
        textAlign: 'Center'
    },

    {
        field: 'Location',
        headerName: 'Location',
        width: '150',
        textAlign: 'Center'
    },

    {
        field: 'id',
        headerName: 'Customer ID',
        width: '120',
        textAlign: 'Center',
        isPrimaryKey: true,
    },

];

export const customersData = [
    {
        id: 1001,
        CustomerName: 'Nirav Joshi',
        ProjectName: 'Hosting Press HTML',
        Status: 'Active',
        StatusBg: '#8BE78B',
        Weeks: '40',
        Budget: '$2.4k',
        Location: 'India',
    },
    {
        id: 1002,

        CustomerName: 'Sunil Joshi',
        CustomerEmail: 'sunil@gmail.com',
        ProjectName: 'Elite Admin',
        Status: 'Active',
        CustomerImage:
            avatar3,

        StatusBg: '#8BE78B',
        Weeks: '11',
        Budget: '$3.9k',
        Location: 'India',
    },
    {
        id: 1003,

        CustomerName: 'Andrew McDownland',
        CustomerEmail: 'andrew@gmail.com',
        ProjectName: 'Real Homes WP Theme',
        Status: 'Pending',
        CustomerImage:
            avatar4,
        StatusBg: '#FEC90F',
        Weeks: '19',
        Budget: '$24.5k',
        Location: 'USA',
    },
    {
        id: 1004,

        CustomerName: 'Christopher Jamil',
        CustomerEmail: 'jamil@gmail.com',
        ProjectName: 'MedicalPro WP Theme',
        Status: 'Completed',
        CustomerImage:
            avatar,
        StatusBg: '#8BE78B',
        Weeks: '34',
        Budget: '$16.5k',
        Location: 'USA',
    },
    {
        id: 1005,

        CustomerName: 'Michael',
        CustomerEmail: 'michael@gmail.com',
        ProjectName: 'Weekly WP Theme',
        Status: 'Cancel',
        CustomerImage:
            avatar2,
        StatusBg: 'red',
        Weeks: '34',
        Budget: '$16.5k',
        Location: 'USA',
    },
    {
        id: 1006,
        CustomerName: 'Nirav Joshi',
        ProjectName: 'Hosting Press HTML',
        Status: 'Active',
        StatusBg: '#8BE78B',
        Weeks: '40',
        Budget: '$2.4k',
        Location: 'India',
    },
    {
        id: 1007,

        CustomerName: 'Sunil Joshi',
        CustomerEmail: 'sunil@gmail.com',
        ProjectName: 'Elite Admin',
        Status: 'Active',
        CustomerImage:
            avatar3,

        StatusBg: '#8BE78B',
        Weeks: '11',
        Budget: '$3.9k',
        Location: 'India',
    },
    {
        id: 1008,

        CustomerName: 'Andrew McDownland',
        CustomerEmail: 'andrew@gmail.com',
        ProjectName: 'Real Homes WP Theme',
        Status: 'Pending',
        CustomerImage:
            avatar4,
        StatusBg: '#FEC90F',
        Weeks: '19',
        Budget: '$24.5k',
        Location: 'USA',
    },
    {
        id: 1009,

        CustomerName: 'Christopher Jamil',
        CustomerEmail: 'jamil@gmail.com',
        ProjectName: 'MedicalPro WP Theme',
        Status: 'Completed',
        CustomerImage:
            avatar,
        StatusBg: '#8BE78B',
        Weeks: '34',
        Budget: '$16.5k',
        Location: 'USA',
    },
    {
        id: 1010,

        CustomerName: 'Michael',
        CustomerEmail: 'michael@gmail.com',
        ProjectName: 'Weekly WP Theme',
        Status: 'Cancel',
        CustomerImage:
            avatar2,
        StatusBg: 'red',
        Weeks: '34',
        Budget: '$16.5k',
        Location: 'USA',
    },
    {
        id: 1011,
        CustomerName: 'Nirav Joshi',
        ProjectName: 'Hosting Press HTML',
        Status: 'Active',
        StatusBg: '#8BE78B',
        Weeks: '40',
        Budget: '$2.4k',
        Location: 'India',
    },
    {
        id: 1012,

        CustomerName: 'Sunil Joshi',
        CustomerEmail: 'sunil@gmail.com',
        ProjectName: 'Elite Admin',
        Status: 'Active',
        CustomerImage:
            avatar3,

        StatusBg: '#8BE78B',
        Weeks: '11',
        Budget: '$3.9k',
        Location: 'India',
    },
    {
        id: 1013,

        CustomerName: 'Andrew McDownland',
        CustomerEmail: 'andrew@gmail.com',
        ProjectName: 'Real Homes WP Theme',
        Status: 'Pending',
        CustomerImage:
            avatar4,
        StatusBg: '#FEC90F',
        Weeks: '19',
        Budget: '$24.5k',
        Location: 'USA',
    },
    {
        id: 1014,

        CustomerName: 'Christopher Jamil',
        CustomerEmail: 'jamil@gmail.com',
        ProjectName: 'MedicalPro WP Theme',
        Status: 'Completed',
        CustomerImage:
            avatar,
        StatusBg: '#8BE78B',
        Weeks: '34',
        Budget: '$16.5k',
        Location: 'USA',
    },
    {
        id: 1015,

        CustomerName: 'Michael',
        CustomerEmail: 'michael@gmail.com',
        ProjectName: 'Weekly WP Theme',
        Status: 'Cancel',
        CustomerImage:
            avatar2,
        StatusBg: 'red',
        Weeks: '34',
        Budget: '$16.5k',
        Location: 'USA',
    },
    {
        id: 1016,
        CustomerName: 'Nirav Joshi',
        ProjectName: 'Hosting Press HTML',
        Status: 'Active',
        StatusBg: '#8BE78B',
        Weeks: '40',
        Budget: '$2.4k',
        Location: 'India',
    },
    {
        id: 1017,

        CustomerName: 'Sunil Joshi',
        CustomerEmail: 'sunil@gmail.com',
        ProjectName: 'Elite Admin',
        Status: 'Active',
        CustomerImage:
            avatar3,

        StatusBg: '#8BE78B',
        Weeks: '11',
        Budget: '$3.9k',
        Location: 'India',
    },
    {
        id: 1018,

        CustomerName: 'Andrew McDownland',
        CustomerEmail: 'andrew@gmail.com',
        ProjectName: 'Real Homes WP Theme',
        Status: 'Pending',
        CustomerImage:
            avatar4,
        StatusBg: '#FEC90F',
        Weeks: '19',
        Budget: '$24.5k',
        Location: 'USA',
    },
    {
        id: 1019,

        CustomerName: 'Christopher Jamil',
        CustomerEmail: 'jamil@gmail.com',
        ProjectName: 'MedicalPro WP Theme',
        Status: 'Completed',
        CustomerImage:
            avatar,
        StatusBg: '#8BE78B',
        Weeks: '34',
        Budget: '$16.5k',
        Location: 'USA',
    },
    {
        id: 1020,

        CustomerName: 'Michael',
        CustomerEmail: 'michael@gmail.com',
        ProjectName: 'Weekly WP Theme',
        Status: 'Cancel',
        CustomerImage:
            avatar2,
        StatusBg: 'red',
        Weeks: '34',
        Budget: '$16.5k',
        Location: 'USA',
    },
    {
        id: 1021,
        CustomerName: 'Nirav Joshi',
        ProjectName: 'Hosting Press HTML',
        Status: 'Active',
        StatusBg: '#8BE78B',
        Weeks: '40',
        Budget: '$2.4k',
        Location: 'India',
    },
    {
        id: 1022,

        CustomerName: 'Sunil Joshi',
        CustomerEmail: 'sunil@gmail.com',
        ProjectName: 'Elite Admin',
        Status: 'Active',
        CustomerImage:
            avatar3,

        StatusBg: '#8BE78B',
        Weeks: '11',
        Budget: '$3.9k',
        Location: 'India',
    },
    {
        id: 1023,

        CustomerName: 'Andrew McDownland',
        CustomerEmail: 'andrew@gmail.com',
        ProjectName: 'Real Homes WP Theme',
        Status: 'Pending',
        CustomerImage:
            avatar4,
        StatusBg: '#FEC90F',
        Weeks: '19',
        Budget: '$24.5k',
        Location: 'USA',
    },
    {
        id: 1024,

        CustomerName: 'Christopher Jamil',
        CustomerEmail: 'jamil@gmail.com',
        ProjectName: 'MedicalPro WP Theme',
        Status: 'Completed',
        CustomerImage:
            avatar,
        StatusBg: '#8BE78B',
        Weeks: '34',
        Budget: '$16.5k',
        Location: 'USA',
    },
    {
        id: 1025,

        CustomerName: 'Michael',
        CustomerEmail: 'michael@gmail.com',
        ProjectName: 'Weekly WP Theme',
        Status: 'Cancel',
        CustomerImage:
            avatar2,
        StatusBg: 'red',
        Weeks: '34',
        Budget: '$16.5k',
        Location: 'USA',
    },
    {
        id: 1026,
        CustomerName: 'Nirav Joshi',
        ProjectName: 'Hosting Press HTML',
        Status: 'Active',
        StatusBg: '#8BE78B',
        Weeks: '40',
        Budget: '$2.4k',
        Location: 'India',
    },
    {
        id: 1027,

        CustomerName: 'Sunil Joshi',
        CustomerEmail: 'sunil@gmail.com',
        ProjectName: 'Elite Admin',
        Status: 'Active',
        CustomerImage:
            avatar3,

        StatusBg: '#8BE78B',
        Weeks: '11',
        Budget: '$3.9k',
        Location: 'India',
    },
    {
        id: 1028,

        CustomerName: 'Andrew McDownland',
        CustomerEmail: 'andrew@gmail.com',
        ProjectName: 'Real Homes WP Theme',
        Status: 'Pending',
        CustomerImage:
            avatar4,
        StatusBg: '#FEC90F',
        Weeks: '19',
        Budget: '$24.5k',
        Location: 'USA',
    },
    {
        id: 1029,

        CustomerName: 'Christopher Jamil',
        CustomerEmail: 'jamil@gmail.com',
        ProjectName: 'MedicalPro WP Theme',
        Status: 'Completed',
        CustomerImage:
            avatar,
        StatusBg: '#8BE78B',
        Weeks: '34',
        Budget: '$16.5k',
        Location: 'USA',
    },
    {
        id: 1030,

        CustomerName: 'Michael',
        CustomerEmail: 'michael@gmail.com',
        ProjectName: 'Weekly WP Theme',
        Status: 'Cancel',
        CustomerImage:
            avatar2,
        StatusBg: 'red',
        Weeks: '34',
        Budget: '$16.5k',
        Location: 'USA',
    },
    {
        id: 1031,
        CustomerName: 'Nirav Joshi',
        ProjectName: 'Hosting Press HTML',
        Status: 'Active',
        StatusBg: '#8BE78B',
        Weeks: '40',
        Budget: '$2.4k',
        Location: 'India',
    },
    {
        id: 1032,

        CustomerName: 'Sunil Joshi',
        CustomerEmail: 'sunil@gmail.com',
        ProjectName: 'Elite Admin',
        Status: 'Active',
        CustomerImage:
            avatar3,

        StatusBg: '#8BE78B',
        Weeks: '11',
        Budget: '$3.9k',
        Location: 'India',
    },
    {
        id: 1033,

        CustomerName: 'Andrew McDownland',
        CustomerEmail: 'andrew@gmail.com',
        ProjectName: 'Real Homes WP Theme',
        Status: 'Pending',
        CustomerImage:
            avatar4,
        StatusBg: '#FEC90F',
        Weeks: '19',
        Budget: '$24.5k',
        Location: 'USA',
    },
    {
        id: 1034,

        CustomerName: 'Christopher Jamil',
        CustomerEmail: 'jamil@gmail.com',
        ProjectName: 'MedicalPro WP Theme',
        Status: 'Completed',
        CustomerImage:
            avatar,
        StatusBg: '#8BE78B',
        Weeks: '34',
        Budget: '$16.5k',
        Location: 'USA',
    },
    {
        id: 1035,

        CustomerName: 'Michael',
        CustomerEmail: 'michael@gmail.com',
        ProjectName: 'Weekly WP Theme',
        Status: 'Cancel',
        CustomerImage:
            avatar2,
        StatusBg: 'red',
        Weeks: '34',
        Budget: '$16.5k',
        Location: 'USA',
    },
    {
        id: 1036,
        CustomerName: 'Nirav Joshi',
        ProjectName: 'Hosting Press HTML',
        Status: 'Active',
        StatusBg: '#8BE78B',
        Weeks: '40',
        Budget: '$2.4k',
        Location: 'India',
    },
    {
        id: 1037,

        CustomerName: 'Sunil Joshi',
        CustomerEmail: 'sunil@gmail.com',
        ProjectName: 'Elite Admin',
        Status: 'Active',
        CustomerImage:
            avatar3,

        StatusBg: '#8BE78B',
        Weeks: '11',
        Budget: '$3.9k',
        Location: 'India',
    },
    {
        id: 1038,

        CustomerName: 'Andrew McDownland',
        CustomerEmail: 'andrew@gmail.com',
        ProjectName: 'Real Homes WP Theme',
        Status: 'Pending',
        CustomerImage:
            avatar4,
        StatusBg: '#FEC90F',
        Weeks: '19',
        Budget: '$24.5k',
        Location: 'USA',
    },
    {
        id: 1039,
        CustomerName: 'Christopher Jamil',
        CustomerEmail: 'jamil@gmail.com',
        ProjectName: 'MedicalPro WP Theme',
        Status: 'Completed',
        CustomerImage:
            avatar,
        StatusBg: '#8BE78B',
        Weeks: '34',
        Budget: '$16.5k',
        Location: 'USA',
    },
    {
        id: 1040,
        CustomerName: 'Michael',
        CustomerEmail: 'michael@gmail.com',
        ProjectName: 'Weekly WP Theme',
        Status: 'Cancel',
        CustomerImage:
            avatar2,
        StatusBg: 'red',
        Weeks: '34',
        Budget: '$16.5k',
        Location: 'USA',
    },

];
