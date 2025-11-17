import { DetailSection } from '@/components/detail-section/types';
import { IStudentClubEventsDetails } from '../../redux/types';
import { viewStudentClubEventsConfig } from './config';
import GenericDetailView from '@/components/detail-section';

interface IProps {
  studentClubEventsData: IStudentClubEventsDetails | undefined;
  onClose: () => void;
}

const StudentClubEventsDetail: React.FC<IProps> = ({ studentClubEventsData, onClose }) => {
  if (!studentClubEventsData) return null;

  const sections: DetailSection<IStudentClubEventsDetails>[] = [
    {
      type: 'dynamic-info',
      dynamicInfoProps: { ...viewStudentClubEventsConfig, data: studentClubEventsData }
    },
    {
      type: 'html',
      title: 'Description',
      html: studentClubEventsData.description || ''
    },
    {
      type: 'files',
      files:
        studentClubEventsData.gallery?.map((media) => ({
          name: media.caption || 'File',
          url: media.image!,
          isPdf: media.image?.endsWith('.pdf') || false
        })) || []
    }
  ];

  return (
    <GenericDetailView
      title={studentClubEventsData.title || 'Student Club Event'}
      avatar={studentClubEventsData.thumbnail}
      status={studentClubEventsData.isActive ? 'active' : 'inactive'}
      sections={sections}
      onClose={onClose}
    />
  );
};

export default StudentClubEventsDetail;
