import { DatabaseError } from '../errors/types/DatabaseError';
import { PrismaClientError } from '../errors/types/PrismaClientError';
import { UniqueConstraintError } from '../errors/types/UniqueConstraintError';

enum PrismaErrors {
  UniqueConstraintViolation = 'P2002',
}

export const handleDatabaseErrors = (error: PrismaClientError) => {
  switch (error.code) {
    case PrismaErrors.UniqueConstraintViolation:
      return new UniqueConstraintError(error);

    default:
      return new DatabaseError(error.message);
  }
};
