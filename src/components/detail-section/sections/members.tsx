import MainCard from '@/components/cards/MainCard';
import { CancelOutlined, CheckCircleOutline } from '@mui/icons-material';
import { Avatar, Box, Chip, Typography } from '@mui/material';
import { MemberItem } from '../types';
import { display } from '@mui/system';

interface MembersSectionProps {
  members: MemberItem[];
  onFileClick: (url: string, isPdf?: boolean) => void;
}

export const MembersSection: React.FC<MembersSectionProps> = ({ members, onFileClick }) => {
  if (!members || members.length === 0)
    return (
      <Typography variant="body2" color="text.secondary">
        No attached members.
      </Typography>
    );

  return (
    <Box sx={{ mt: 4, borderBottom: 1, borderColor: 'divider', pb: 4 }}>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 500,
          color: 'text.secondary',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          mb: 2
        }}
      >
        Members
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        {members.map((member) => (
          <MainCard
            key={member.id}
            elevation={3}
            sx={{
              display: 'grid',
              placeItems: 'center',
              borderRadius: 3,
              p: 2
            }}
          >
            <Avatar
              src={member.photo}
              alt={member.fullName || 'member'}
              sx={{ width: 100, height: 100, borderRadius: 100, cursor: member.photo ? 'pointer' : 'default' }}
              onClick={() => member.photo && onFileClick(member.photo!, false)}
            >
              {member.fullName?.charAt(0) || 'U'}
            </Avatar>
            <Box sx={{ display: 'grid', placeItems: 'center' }}>
              <Typography variant="h6" fontWeight={500}>
                {member.fullName || 'Member'}
              </Typography>
              {member.designation && (
                <Typography variant="body1" fontWeight={400} sx={{ mb: 2 }}>
                  {member.designation}
                </Typography>
              )}
              <Chip
                size="small"
                variant="outlined"
                color={member.isActive ? 'success' : 'error'}
                label={member.isActive ? 'Active' : 'Inactive'}
                icon={member.isActive ? <CheckCircleOutline fontSize="small" /> : <CancelOutlined fontSize="small" />}
                sx={{
                  p: 1.5,
                  fontWeight: 500,
                  borderRadius: 1
                }}
              />
            </Box>
          </MainCard>
        ))}
      </Box>
    </Box>
  );
};
