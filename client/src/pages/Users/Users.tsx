/** Dependencies */
import React, { useEffect, useState } from 'react';

/** Styles */
import { Box } from '@mui/material';

/** Hooks */
import useUsers from "../../hooks/useUsers";

/** Components */
import UsersTable from './UsersTable.tsx';
import LoadingState from '../../components/LoadingState';
import ErrorState from '../../components/ErrorState';

function Customers() {
    const {
        users,
        userLoading,
        userError,
        meta,
        fetchUsers
    } = useUsers();

    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchUsers();
    }, []);

    if (!users && userError) {
        return (
            <ErrorState
                message='Error'
            />
        );
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {userLoading ? (
                <LoadingState />
            ) : (
                <UsersTable
                    page={page}
                    setPage={setPage}
                />
            )}
        </Box>
    );
}

export default Customers;
