import { DetailSection } from '@/components/detail-section/types';
import { IStudentClubsDetails } from '../../redux/types';
import { viewStudentClubsConfig } from './config';
import GenericDetailView from '@/components/detail-section';

interface IProps {
  studentClubsData: IStudentClubsDetails | undefined;
  onClose: () => void;
}

const StudentClubsDetail: React.FC<IProps> = ({ studentClubsData, onClose }) => {
  if (!studentClubsData) return null;

  const sections: DetailSection<IStudentClubsDetails>[] = [
    {
      type: 'dynamic-info',
      dynamicInfoProps: { ...viewStudentClubsConfig, data: studentClubsData }
    },
    {
      type: 'html',
      title: 'Short Description',
      html: studentClubsData.shortDescription || ''
    },
    {
      type: 'html',
      title: 'Detailed Description',
      html: studentClubsData.detailedDescription || ''
    },
    {
      type: 'files',
      files:
        studentClubsData.members?.map((member) => ({
          name: member.fullName || 'Member',
          url: member.photo!,
          isPdf: false
        })) || []
    }
  ];

  return (
    <GenericDetailView
      title={studentClubsData.name || 'Student Club'}
      avatar={studentClubsData.thumbnail}
      status={studentClubsData.isActive ? 'active' : 'inactive'}
      sections={sections}
      onClose={onClose}
    />
  );
};

export default StudentClubsDetail;
