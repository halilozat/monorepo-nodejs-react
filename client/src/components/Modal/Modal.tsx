import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogProps,
  Grid,
  useMediaQuery,
  Chip,
} from '@mui/material';
import React from 'react';
import Button from '../Button';
import Icon, { IconName } from '../Icon';

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  titleIconName?: IconName;
  actionIconName?: IconName;
  negativeActionIconName?: IconName;
  extraActionOneIconName?: IconName;
  extraActionTwoIconName?: IconName;
  extraActionThreeIconName?: IconName;
  description?: string;
  subtitle?: string;
  children?: React.ReactNode;
  positiveAction?: string | boolean;
  negativeAction?: string | boolean;
  onPositiveClick?: () => void;
  onNegativeClick?: () => void;
  extraActionOne?: string | boolean;
  onExtraActionOneClick?: () => void;
  extraActionTwo?: string | boolean;
  onExtraActionTwoClick?: () => void;
  extraActionThree?: string | boolean;
  onExtraActionThreeClick?: () => void;
  loading?: boolean;
  headerButton?: boolean;
  headerButtonIconName?: IconName;
  headerButtonIconNameErrorColor?: string;
  headerButtonText?: string;
  onHeaderButtonClick?: () => void;
  maxWidth?: DialogProps['maxWidth'];
  nonDivider?: boolean;
  disableEscapeKeyDown?: boolean;
  buttonVariant?: 'text' | 'outlined' | 'contained';
  pageName?: string;
  fullScreen?: boolean;
  positionRight?: boolean;
  chip?: { title: string; color: string };
}
function Modal({
  open,
  onClose,
  title,
  titleIconName,
  description,
  subtitle,
  positiveAction,
  negativeAction,
  onPositiveClick,
  onNegativeClick,
  headerButton,
  headerButtonIconName,
  headerButtonIconNameErrorColor,
  headerButtonText,
  onHeaderButtonClick,
  loading,
  maxWidth,
  children,
  nonDivider,
  disableEscapeKeyDown,
  extraActionOne,
  extraActionTwo,
  extraActionThree,
  onExtraActionOneClick,
  onExtraActionTwoClick,
  onExtraActionThreeClick,
  actionIconName,
  negativeActionIconName,
  extraActionOneIconName,
  extraActionTwoIconName,
  extraActionThreeIconName,
  buttonVariant,
  pageName,
  fullScreen,
  positionRight,
  chip,
}: Props) {
  const matchesSm = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  const matchesMd = useMediaQuery((theme: any) => theme.breakpoints.down('md'));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth
      fullScreen={fullScreen}
      disableEscapeKeyDown={disableEscapeKeyDown}
      sx={
        positionRight
          ? {
              '& .MuiDialog-paper': {
                marginLeft: 'auto',
                marginRight: 0,
                height: '100%',
                maxHeight: '100%',
              },
              maxHeight: '100%',
            }
          : {}
      }
    >
      {title && (
        <DialogTitle
          sx={
            pageName === 'paymentModal'
              ? { display: 'flex', alignItems: 'center', padding: '0px 24px' }
              : { display: 'flex', alignItems: 'center' }
          }
          color="primary.dark"
        >
          <Box
            sx={{
              width:
                headerButton || pageName === 'paymentModal' ? '100%' : null,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: { xs: 13, sm: 16, md: 18, lg: 20 },
            }}
          >
            {titleIconName && <Icon name={titleIconName} sx={{ mr: 1 }} />}
            {title}
            {pageName === 'paymentModal' ? (
              <DialogActions sx={{ py: 2 }}>
                <Grid container justifyContent="flex-end">
                  <Grid item md={12} lg={12}>
                    <Grid
                      container
                      justifyContent={!matchesMd ? 'flex-end' : 'center'}
                    >
                      <Grid item>
                        {positiveAction && (
                          <Button
                            variant={buttonVariant || 'contained'}
                            onClick={onPositiveClick}
                            loading={loading}
                            sx={{
                              fontSize: { xs: 10, sm: 11, md: 12, lg: 14 },
                            }}
                          >
                            {actionIconName && (
                              <Icon
                                name={actionIconName}
                                sx={{ mr: { xs: 0, lg: 1 } }}
                              />
                            )}
                            {positiveAction}
                          </Button>
                        )}
                      </Grid>
                      <Grid item>
                        {extraActionOne && !matchesSm && (
                          <Button
                            variant={buttonVariant}
                            onClick={onExtraActionOneClick}
                            loading={loading}
                            sx={{
                              fontSize: { xs: 10, sm: 11, md: 12, lg: 14 },
                            }}
                          >
                            {extraActionOneIconName && (
                              <Icon
                                name={extraActionOneIconName}
                                sx={{ mr: { xs: 0, lg: 1 } }}
                              />
                            )}
                            {extraActionOne}
                          </Button>
                        )}
                      </Grid>
                      <Grid item>
                        {extraActionTwo && !matchesSm && (
                          <Button
                            variant={buttonVariant}
                            onClick={onExtraActionTwoClick}
                            loading={loading}
                            sx={{
                              fontSize: { xs: 10, sm: 11, md: 12, lg: 14 },
                            }}
                          >
                            {extraActionTwoIconName && (
                              <Icon
                                name={extraActionTwoIconName}
                                sx={{ mr: { xs: 0, lg: 1 } }}
                              />
                            )}
                            {extraActionTwo}
                          </Button>
                        )}
                      </Grid>
                      <Grid item>
                        {extraActionThree && !matchesSm && (
                          <Button
                            variant={buttonVariant}
                            onClick={onExtraActionThreeClick}
                            loading={loading}
                            sx={{
                              fontSize: { xs: 10, sm: 11, md: 12, lg: 14 },
                            }}
                          >
                            {extraActionThreeIconName && (
                              <Icon
                                name={extraActionThreeIconName}
                                sx={{ mr: { xs: 0, lg: 1 } }}
                              />
                            )}
                            {extraActionThree}
                          </Button>
                        )}
                      </Grid>
                      <Grid item>
                        {negativeAction && (
                          <Button
                            variant="text"
                            color="error"
                            onClick={onNegativeClick}
                            sx={{
                              fontSize: { xs: 10, sm: 11, md: 12, lg: 14 },
                            }}
                          >
                            {negativeActionIconName && (
                              <Icon
                                name={negativeActionIconName}
                                sx={{ mr: { xs: 0, lg: 1 } }}
                              />
                            )}
                            {negativeAction}
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </DialogActions>
            ) : null}
            {headerButton ? (
              <Button
                sx={{ textTransform: 'none' }}
                loading={loading}
                variant="outlined"
                color={headerButtonIconNameErrorColor ? 'error' : 'primary'}
                startIcon={
                  headerButtonIconName && <Icon name={headerButtonIconName} />
                }
                onClick={onHeaderButtonClick}
              >
                {headerButtonText}
              </Button>
            ) : null}
          </Box>
          {chip && (
            <Grid>
              <Chip
                variant="filled"
                label={chip.title}
                sx={{
                  ml: 1.25,
                  backgroundColor: chip.color,
                  color: chip.color === '#CECE5A' ? 'black' : 'white',
                }}
                size="small"
              />
            </Grid>
          )}
        </DialogTitle>
      )}
      {subtitle && (
        <DialogContent>
          <DialogContentText sx={{ fontSize: '12px' }}>
            {subtitle}
          </DialogContentText>
        </DialogContent>
      )}
      <DialogContent dividers={!nonDivider}>
        {description && <DialogContentText>{description}</DialogContentText>}
        {children}
      </DialogContent>
      {pageName === 'paymentModal' ? null : (
        <DialogActions sx={{ px: 2.5, py: 2 }}>
          {negativeAction && (
            <Button variant="text" color="error" onClick={onNegativeClick}>
              {negativeActionIconName && (
                <Icon name={negativeActionIconName} sx={{ mr: 1 }} />
              )}
              {negativeAction}
            </Button>
          )}
          {extraActionOne && (
            <Button
              variant={buttonVariant}
              onClick={onExtraActionOneClick}
              loading={loading}
            >
              {extraActionOneIconName && (
                <Icon name={extraActionOneIconName} sx={{ mr: 1 }} />
              )}
              {extraActionOne}
            </Button>
          )}
          {positiveAction && (
            <Button
              variant={buttonVariant || 'contained'}
              onClick={onPositiveClick}
              loading={loading}
            >
              {actionIconName && <Icon name={actionIconName} sx={{ mr: 1 }} />}
              {positiveAction}
            </Button>
          )}
          {extraActionTwo && (
            <Button
              variant={buttonVariant}
              onClick={onExtraActionTwoClick}
              loading={loading}
            >
              {extraActionTwoIconName && (
                <Icon name={extraActionTwoIconName} sx={{ mr: 1 }} />
              )}
              {extraActionTwo}
            </Button>
          )}
          {extraActionThree && (
            <Button
              variant={buttonVariant}
              onClick={onExtraActionThreeClick}
              loading={loading}
            >
              {extraActionThreeIconName && (
                <Icon name={extraActionThreeIconName} sx={{ mr: 1 }} />
              )}
              {extraActionThree}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
}

export default Modal;
