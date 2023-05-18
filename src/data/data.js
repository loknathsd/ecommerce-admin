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

 const gridOrderStatus = (props) => (
    <button
        type="button"
        style={{ background: props.StatusBg }}
        className="text-white py-1 px-2 capitalize rounded-2xl text-md"
    >
        {props.Status}
    </button>
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

export const ordersGrid = [
    {
        field: 'image',
        headerName: 'image',
        renderCell: (params) => <img className="w-12 rounded-full" src={params.value} alt="" />,
        textAlign: 'Center',
        width: '120',
    },
    {
        field: 'OrderItems',
        headerName: 'Item',
        width: '150',
        editType: 'dropdownedit',
        textAlign: 'Center',
    },
    {
        field: 'CustomerName',
        headerName: 'Customer Name',
        width: '150',
        textAlign: 'Center',
    },
    {
        field: 'TotalAmount',
        headerName: 'Total Amount',
        format: 'C2',
        textAlign: 'Center',
        editType: 'numericedit',
        width: '150',
    },
    {
        headerName: 'Status',
        template: gridOrderStatus,
        field: 'Status',
        textAlign: 'Center',
        width: '120',
    },
    {
        field: 'id',
        headerName: 'Order ID',
        width: '120',
        textAlign: 'Center',
    },

    {
        field: 'Location',
        headerName: 'Location',
        width: '150',
        textAlign: 'Center',
    },
];

export const ordersData = [
    {
        id: 845954,
        image:'',
        CustomerName: 'Jie Yan',
        TotalAmount: 87.99,
        OrderItems: 'Shoes',
        Location: 'USA',
        Status: 'pending',
        
    },
    {
        id: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        image:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
        id: 38489,
        CustomerName: 'Miron',
        TotalAmount: 87.99,
        OrderItems: 'Ice Cream',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        image:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
        id: 24546,
        CustomerName: 'Frank',
        TotalAmount: 84.99,
        OrderItems: 'Pan Cake',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        image:
            'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
        id: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        image:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },

    {
        id: 845954,
        CustomerName: 'Jie Yan',
        TotalAmount: 87.99,
        OrderItems: 'Shoes',
        Location: 'USA',
        Status: 'pending',
        image:
            'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
        id: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        image:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
        id: 38489,
        CustomerName: 'Miron',
        TotalAmount: 87.99,
        OrderItems: 'Ice Cream',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        image:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
        id: 24546,
        CustomerName: 'Frank',
        TotalAmount: 84.99,
        OrderItems: 'Pan Cake',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        image:
            'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
        id: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        image:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
        id: 845954,
        CustomerName: 'Jie Yan',
        TotalAmount: 87.99,
        OrderItems: 'Shoes',
        Location: 'USA',
        Status: 'pending',
        image:
            'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
        id: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        image:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
        id: 38489,
        CustomerName: 'Miron',
        TotalAmount: 87.99,
        OrderItems: 'Ice Cream',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        image:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
        id: 24546,
        CustomerName: 'Frank',
        TotalAmount: 84.99,
        OrderItems: 'Pan Cake',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        image:
            'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
        id: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        image:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },


];
