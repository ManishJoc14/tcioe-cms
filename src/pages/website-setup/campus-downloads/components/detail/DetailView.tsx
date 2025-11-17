import { DetailSection } from '@/components/detail-section/types';
import { ICampusDownloadsDetails } from '../../redux/types';
import { viewCampusDownloadsConfig } from './config';
import GenericDetailView from '@/components/detail-section';

interface IProps {
  campusDownloadsData: ICampusDownloadsDetails | undefined;
  onClose: () => void;
}

const CampusDownloadsDetail: React.FC<IProps> = ({ campusDownloadsData, onClose }) => {
  if (!campusDownloadsData) return null;

  const sections: DetailSection<ICampusDownloadsDetails>[] = [
    {
      type: 'dynamic-info',
      dynamicInfoProps: { ...viewCampusDownloadsConfig, data: campusDownloadsData }
    },
    {
      type: 'html',
      title: 'Description',
      html: campusDownloadsData.description || ''
    },
    {
      type: 'files',
      files: campusDownloadsData.file
        ? [
            {
              name: campusDownloadsData.title || 'File',
              url: campusDownloadsData.file,
              isPdf: campusDownloadsData.file.endsWith('.pdf')
            }
          ]
        : []
    }
  ];

  return (
    <GenericDetailView
      title={campusDownloadsData.title || 'Campus Download'}
      avatar={campusDownloadsData.file}
      status={campusDownloadsData.isActive ? 'active' : 'inactive'}
      sections={sections}
      onClose={onClose}
    />
  );
};

export default CampusDownloadsDetail;
