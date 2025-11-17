import { DetailSection } from '@/components/detail-section/types';
import { ICampusKeyOfficialsDetails } from '../../redux/types';
import { viewCampusKeyOfficialsConfig } from './config';
import GenericDetailView from '@/components/detail-section';

interface IProps {
  campusKeyOfficialsData: ICampusKeyOfficialsDetails | undefined;
  onClose: () => void;
}

const CampusKeyOfficialsDetail: React.FC<IProps> = ({ campusKeyOfficialsData, onClose }) => {
  if (!campusKeyOfficialsData) return null;

  const updatedCampusKeyOfficialsData = {
    ...campusKeyOfficialsData,
    fullName: campusKeyOfficialsData.titlePrefix
      ? `${campusKeyOfficialsData.titlePrefix}. ${campusKeyOfficialsData.fullName}`
      : campusKeyOfficialsData.fullName
  };

  const sections: DetailSection<ICampusKeyOfficialsDetails>[] = [
    {
      type: 'dynamic-info',
      dynamicInfoProps: { ...viewCampusKeyOfficialsConfig, data: updatedCampusKeyOfficialsData }
    },
    {
      type: 'html',
      title: 'Message',
      html: campusKeyOfficialsData.message || ''
    }
  ];

  return (
    <GenericDetailView
      title={updatedCampusKeyOfficialsData.fullName || 'Campus Key Official'}
      avatar={campusKeyOfficialsData.photo}
      status={campusKeyOfficialsData.isActive ? 'active' : 'inactive'}
      sections={sections}
      onClose={onClose}
    />
  );
};

export default CampusKeyOfficialsDetail;
