import { DetailSection } from '@/components/detail-section/types';
import { ICampusFeedbacksDetails } from '../../redux/types';
import { viewCampusFeedbacksConfig } from './config';
import GenericDetailView from '@/components/detail-section';

interface IProps {
  campusFeedbacksData: ICampusFeedbacksDetails | undefined;
  onClose: () => void;
}

const CampusFeedbacksDetail: React.FC<IProps> = ({ campusFeedbacksData, onClose }) => {
  if (!campusFeedbacksData) return null;

  const sections: DetailSection<ICampusFeedbacksDetails>[] = [
    {
      type: 'dynamic-info',
      dynamicInfoProps: { ...viewCampusFeedbacksConfig, data: campusFeedbacksData }
    },
    {
      type: 'html',
      title: 'Message',
      html: campusFeedbacksData.message || ''
    }
  ];

  return (
    <GenericDetailView
      title={campusFeedbacksData.fullName || 'Campus Feedback'}
      avatar={undefined}
      status={campusFeedbacksData.isResolved ? 'active' : 'inactive'}
      sections={sections}
      onClose={onClose}
    />
  );
};

export default CampusFeedbacksDetail;
