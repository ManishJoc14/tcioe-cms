import { DetailSection } from '@/components/detail-section/types';
import { ICampusEventsDetails } from '../../redux/types';
import { viewCampusEventsConfig } from './config';
import GenericDetailView from '@/components/detail-section';

interface IProps {
  campusEventsData: ICampusEventsDetails | undefined;
  onClose: () => void;
}

const CampusEventsDetail: React.FC<IProps> = ({ campusEventsData, onClose }) => {
  if (!campusEventsData) return null;

  const sections: DetailSection<ICampusEventsDetails>[] = [
    {
      type: 'dynamic-info',
      dynamicInfoProps: { ...viewCampusEventsConfig, data: campusEventsData }
    },
    {
      type: 'html',
      title: 'Short Description',
      html: campusEventsData.descriptionShort || ''
    },
    {
      type: 'html',
      title: 'Detailed Description',
      html: campusEventsData.descriptionDetailed || ''
    },
    {
      type: 'files',
      files:
        campusEventsData.gallery?.map((media) => ({
          name: media.caption || 'File',
          url: media.image!,
          isPdf: media.image?.endsWith('.pdf') || false
        })) || []
    }
  ];

  return (
    <GenericDetailView
      title={campusEventsData.title || 'Campus Event'}
      avatar={campusEventsData.thumbnail}
      status={campusEventsData.isActive ? 'active' : 'inactive'}
      sections={sections}
      onClose={onClose}
    />
  );
};

export default CampusEventsDetail;
