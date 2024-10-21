import {
  Info,
  ContentCopy,
  Cached,
  FileUpload,
  MoreHoriz,
  RoomService,
  ContactPhone,
  AccessTime,
  AccessTimeFilled,
  Adjust,
  ExpandLess,
  ExpandMore,
  Logout,
  MoveToInbox,
  Language,
  Add,
  Remove,
  Edit,
  TableRestaurant,
  Restaurant,
  Delete,
  KeyboardArrowUp,
  KeyboardArrowDown,
  QuestionMark,
  HelpOutlineOutlined,
  Category,
  MoreVert,
  Circle,
  CheckCircle,
  CheckCircleOutline,
  Check,
  Close,
  Block,
  Person,
  People,
  ArrowBack,
  ArrowForward,
  MonetizationOn,
  List,
  NoteAlt,
  Group,
  CreditCard,
  CardTravel,
  CompareArrows,
  ChangeCircleOutlined,
  BackupTable,
  BackupTableOutlined,
  PrintOutlined,
  DoDisturbAltOutlined,
  AttachFile,
  KeyboardReturn,
  CallSplit,
  FiberManualRecord,
  RestaurantMenu,
  Menu,
  AssignmentInd,
  Shortcut,
  Settings,
  Print,
  Stars,
  FlashOn,
  LocalOffer,
  TouchApp,
  Save,
  LocalAtm,
  SubdirectoryArrowRight,
  Refresh,
  RadioButtonChecked,
  RadioButtonUnchecked,
  Bolt,
  SupervisorAccount,
  Home,
  AssignmentTurnedIn,
  ShoppingBasket,
  Layers,
  PieChart,
  DesktopMac,
  ViewQuilt,
  ViewList,
  TrendingDown,
  VerifiedUser,
  Hub,
  ViewColumn,
  TwoWheeler,
  StoreMallDirectory,
  Payment,
  HighlightOff,
  Apps,
  QrCode,
  SupportAgent,
  WhatsApp,
  PhoneInTalk,
  SouthAmerica,
  Assessment,
  ViewCarousel,
  Redeem,
  Upload,
} from '@mui/icons-material';

import { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

export type IconName =
  | 'Info'
  | 'ContentCopy'
  | 'Cached'
  | 'FileUpload'
  | 'MoreHoriz'
  | 'RoomService'
  | 'ContactPhone'
  | 'AccessTime'
  | 'AccessTimeFilled'
  | 'TwoWheeler'
  | 'ViewColumn'
  | 'StoreMallDirectory'
  | 'Adjust'
  | 'Payment'
  | 'MoveToInbox'
  | 'Logout'
  | 'ExpandLess'
  | 'ExpandMore'
  | 'AssignmentInd'
  | 'VerifiedUser'
  | 'Language'
  | 'Add'
  | 'Remove'
  | 'Edit'
  | 'Delete'
  | 'KeyboardArrowUp'
  | 'KeyboardArrowDown'
  | 'TableRestaurant'
  | 'Restaurant'
  | 'QuestionMark'
  | 'QuestionMarkOutlined'
  | 'Category'
  | 'MoreVert'
  | 'Circle'
  | 'CheckCircle'
  | 'CheckCircleOutline'
  | 'Customer'
  | 'Check'
  | 'Close'
  | 'Block'
  | 'Back'
  | 'MonetizationOn'
  | 'List'
  | 'ArrowBack'
  | 'ArrowForward'
  | 'Person'
  | 'People'
  | 'NoteAlt'
  | 'Group'
  | 'CreditCard'
  | 'CardTravel'
  | 'CompareArrows'
  | 'ChangeCircleOutlined'
  | 'BackupTable'
  | 'BackupTableOutlined'
  | 'PrintOutlined'
  | 'DoDisturbAltOutlined'
  | 'AttachFile'
  | 'KeyboardReturn'
  | 'CallSplit'
  | 'FiberManualRecord'
  | 'RestaurantMenu'
  | 'Menu'
  | 'Shortcut'
  | 'Settings'
  | 'Stars'
  | 'Print'
  | 'FlashOn'
  | 'LocalOffer'
  | 'TouchApp'
  | 'Save'
  | 'LocalAtm'
  | 'SubdirectoryArrowRight'
  | 'Refresh'
  | 'RadioButtonChecked'
  | 'RadioButtonUnchecked'
  | 'Bolt'
  | 'SupervisorAccount'
  | 'Home'
  | 'AssignmentTurnedIn'
  | 'ShoppingBasket'
  | 'Layers'
  | 'PieChart'
  | 'DesktopMac'
  | 'ViewQuilt'
  | 'ViewList'
  | 'TrendingDown'
  | 'Hub'
  | 'HighlightOff'
  | 'Apps'
  | 'QrCode'
  | 'SupportAgent'
  | 'WhatsApp'
  | 'PhoneInTalk'
  | 'SouthAmerica'
  | 'Assessment'
  | 'ViewCarousel'
  | 'Redeem'
  | 'Upload';

interface Props extends SvgIconProps {
  name: IconName;
}
function Icon({ name, ...rest }: Props) {
  switch (name) {
    case 'Info':
      return <Info {...rest} />;
    case 'ContentCopy':
      return <ContentCopy {...rest} />;
    case 'Cached':
      return <Cached {...rest} />;
    case 'FileUpload':
      return <FileUpload {...rest} />;
    case 'MoreHoriz':
      return <MoreHoriz {...rest} />;
    case 'RoomService':
      return <RoomService {...rest} />;
    case 'ContactPhone':
      return <ContactPhone {...rest} />;
    case 'AccessTime':
      return <AccessTime {...rest} />;
    case 'AccessTimeFilled':
      return <AccessTimeFilled {...rest} />;
    case 'Adjust':
      return <Adjust {...rest} />;
    case 'Payment':
      return <Payment {...rest} />;
    case 'StoreMallDirectory':
      return <StoreMallDirectory {...rest} />;
    case 'TwoWheeler':
      return <TwoWheeler {...rest} />;
    case 'ViewColumn':
      return <ViewColumn {...rest} />;
    case 'MoveToInbox':
      return <MoveToInbox {...rest} />;
    case 'AssignmentInd':
      return <AssignmentInd {...rest} />;
    case 'TrendingDown':
      return <TrendingDown {...rest} />;
    case 'VerifiedUser':
      return <VerifiedUser {...rest} />;
    case 'Logout':
      return <Logout {...rest} />;
    case 'ExpandMore':
      return <ExpandMore {...rest} />;
    case 'ExpandLess':
      return <ExpandLess {...rest} />;
    case 'Language':
      return <Language {...rest} />;
    case 'Add':
      return <Add {...rest} />;
    case 'Remove':
      return <Remove {...rest} />;
    case 'Edit':
      return <Edit {...rest} />;
    case 'Delete':
      return <Delete {...rest} />;
    case 'TableRestaurant':
      return <TableRestaurant {...rest} />;
    case 'Restaurant':
      return <Restaurant {...rest} />;
    case 'KeyboardArrowUp':
      return <KeyboardArrowUp {...rest} />;
    case 'KeyboardArrowDown':
      return <KeyboardArrowDown {...rest} />;
    case 'QuestionMark':
      return <QuestionMark {...rest} />;
    case 'QuestionMarkOutlined':
      return <HelpOutlineOutlined {...rest} />;
    case 'Category':
      return <Category {...rest} />;
    case 'MoreVert':
      return <MoreVert {...rest} />;
    case 'CheckCircleOutline':
      return <CheckCircleOutline {...rest} />;
    case 'Circle':
      return <Circle {...rest} />;
    case 'CheckCircle':
      return <CheckCircle {...rest} />;
    case 'Block':
      return <Block {...rest} />;
    case 'Customer':
      return <Person {...rest} />;
    case 'People':
      return <People {...rest} />;
    case 'Back':
      return <ArrowBack {...rest} />;
    case 'ArrowForward':
      return <ArrowForward {...rest} />;
    case 'MonetizationOn':
      return <MonetizationOn {...rest} />;
    case 'List':
      return <List {...rest} />;
    case 'ArrowBack':
      return <ArrowBack {...rest} />;
    case 'Person':
      return <Person {...rest} />;
    case 'Check':
      return <Check {...rest} />;
    case 'Close':
      return <Close {...rest} />;
    case 'NoteAlt':
      return <NoteAlt {...rest} />;
    case 'Group':
      return <Group {...rest} />;
    case 'CreditCard':
      return <CreditCard {...rest} />;
    case 'CardTravel':
      return <CardTravel {...rest} />;
    case 'CompareArrows':
      return <CompareArrows {...rest} />;
    case 'ChangeCircleOutlined':
      return <ChangeCircleOutlined {...rest} />;
    case 'BackupTable':
      return <BackupTable {...rest} />;
    case 'BackupTableOutlined':
      return <BackupTableOutlined {...rest} />;
    case 'PrintOutlined':
      return <PrintOutlined {...rest} />;
    case 'DoDisturbAltOutlined':
      return <DoDisturbAltOutlined {...rest} />;
    case 'AttachFile':
      return <AttachFile {...rest} />;
    case 'KeyboardReturn':
      return <KeyboardReturn {...rest} />;
    case 'CallSplit':
      return <CallSplit {...rest} />;
    case 'FiberManualRecord':
      return <FiberManualRecord {...rest} />;
    case 'RestaurantMenu':
      return <RestaurantMenu {...rest} />;
    case 'Menu':
      return <Menu {...rest} />;
    case 'Shortcut':
      return <Shortcut {...rest} />;
    case 'Settings':
      return <Settings {...rest} />;
    case 'Stars':
      return <Stars {...rest} />;
    case 'Print':
      return <Print {...rest} />;
    case 'FlashOn':
      return <FlashOn {...rest} />;
    case 'LocalOffer':
      return <LocalOffer {...rest} />;
    case 'TouchApp':
      return <TouchApp {...rest} />;
    case 'Save':
      return <Save {...rest} />;
    case 'LocalAtm':
      return <LocalAtm {...rest} />;
    case 'SubdirectoryArrowRight':
      return <SubdirectoryArrowRight {...rest} />;
    case 'Refresh':
      return <Refresh {...rest} />;
    case 'RadioButtonChecked':
      return <RadioButtonChecked {...rest} />;
    case 'RadioButtonUnchecked':
      return <RadioButtonUnchecked {...rest} />;
    case 'Bolt':
      return <Bolt {...rest} />;
    case 'SupervisorAccount':
      return <SupervisorAccount {...rest} />;
    case 'Home':
      return <Home {...rest} />;
    case 'AssignmentTurnedIn':
      return <AssignmentTurnedIn {...rest} />;
    case 'ShoppingBasket':
      return <ShoppingBasket {...rest} />;
    case 'Layers':
      return <Layers {...rest} />;
    case 'PieChart':
      return <PieChart {...rest} />;
    case 'DesktopMac':
      return <DesktopMac {...rest} />;
    case 'ViewQuilt':
      return <ViewQuilt {...rest} />;
    case 'ViewList':
      return <ViewList {...rest} />;
    case 'Hub':
      return <Hub {...rest} />;
    case 'HighlightOff':
      return <HighlightOff {...rest} />;
    case 'Apps':
      return <Apps {...rest} />;
    case 'QrCode':
      return <QrCode {...rest} />;
    case 'SupportAgent':
      return <SupportAgent {...rest} />;
    case 'WhatsApp':
      return <WhatsApp {...rest} />;
    case 'PhoneInTalk':
      return <PhoneInTalk {...rest} />;
    case 'SouthAmerica':
      return <SouthAmerica {...rest} />;
    case 'Assessment':
      return <Assessment {...rest} />;
    case 'ViewCarousel':
      return <ViewCarousel {...rest} />;
    case 'Redeem':
      return <Redeem {...rest} />;
    case 'Upload':
      return <Upload {...rest} />;
    default:
      return null;
  }
}

export default Icon;
