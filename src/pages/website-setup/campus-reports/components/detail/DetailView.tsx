import { DetailSection } from '@/components/detail-section/types';
import { ICampusReportsDetails } from '../../redux/types';
import { viewCampusReportsConfig } from './config';
import GenericDetailView from '@/components/detail-section';

interface IProps {
  campusReportsData: ICampusReportsDetails | undefined;
  onClose: () => void;
}

const CampusReportsDetail: React.FC<IProps> = ({ campusReportsData, onClose }) => {
  if (!campusReportsData) return null;

  const sections: DetailSection<ICampusReportsDetails>[] = [
    {
      type: 'dynamic-info',
      dynamicInfoProps: { ...viewCampusReportsConfig, data: campusReportsData }
    },
    {
      type: 'files',
      files: campusReportsData.file
        ? [
            {
              name: campusReportsData.reportType || 'File',
              url: campusReportsData.file,
              isPdf: campusReportsData.file.endsWith('.pdf')
            }
          ]
        : []
    }
  ];

  return (
    <GenericDetailView
      title={campusReportsData.reportType || 'Campus Report'}
      avatar={undefined}
      status={campusReportsData.isActive ? 'active' : 'inactive'}
      sections={sections}
      onClose={onClose}
    />
  );
};

export default CampusReportsDetail;
