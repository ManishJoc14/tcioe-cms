import { DetailSection, MemberItem } from '@/components/detail-section/types';
import { ICampusUnionsDetails } from '../../redux/types';
import { viewCampusUnionsConfig } from './config';
import GenericDetailView from '@/components/detail-section';

interface IProps {
  campusUnionsData: ICampusUnionsDetails | undefined;
  onClose: () => void;
}

const CampusUnionsDetail: React.FC<IProps> = ({ campusUnionsData, onClose }) => {
  if (!campusUnionsData) return null;

  const sections: DetailSection<ICampusUnionsDetails>[] = [
    {
      type: 'dynamic-info',
      dynamicInfoProps: { ...viewCampusUnionsConfig, data: campusUnionsData }
    },
    {
      type: 'html',
      title: 'Detailed Description',
      html: campusUnionsData.detailedDescription || ''
    },
    {
      type: 'members',
      members:
        campusUnionsData.members?.map((member) => ({
          id: member.id,
          fullName: member.fullName,
          designation: member.designation,
          photo: member.photo,
          isActive: member.isActive
        })) || []
    }
  ];

  return (
    <GenericDetailView
      title={campusUnionsData.name || 'Campus Union'}
      avatar={undefined}
      status={campusUnionsData.isActive ? 'active' : 'inactive'}
      sections={sections}
      onClose={onClose}
    />
  );
};

export default CampusUnionsDetail;
