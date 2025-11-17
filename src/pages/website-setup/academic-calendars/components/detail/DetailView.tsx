import { DetailSection } from '@/components/detail-section/types';
import { IAcademicCalendarsDetails } from '../../redux/types';
import { viewAcademicCalendarsConfig } from './config';
import GenericDetailView from '@/components/detail-section';

interface IProps {
  academicCalendarsData: IAcademicCalendarsDetails | undefined;
  onClose: () => void;
}

const AcademicCalendarsDetail: React.FC<IProps> = ({ academicCalendarsData, onClose }) => {
  if (!academicCalendarsData) return null;

  const sections: DetailSection<IAcademicCalendarsDetails>[] = [
    {
      type: 'dynamic-info',
      dynamicInfoProps: { ...viewAcademicCalendarsConfig, data: academicCalendarsData }
    },
    {
      type: 'files',
      files: [
        {
          name: academicCalendarsData.programType || 'File',
          url: academicCalendarsData.file,
          isPdf: academicCalendarsData.file.endsWith('.pdf')
        }
      ]
    }
  ];

  return (
    <GenericDetailView
      title={academicCalendarsData.programType || 'Academic Calendar'}
      avatar={undefined}
      status={academicCalendarsData.isActive ? 'active' : 'inactive'}
      sections={sections}
      onClose={onClose}
    />
  );
};

export default AcademicCalendarsDetail;
