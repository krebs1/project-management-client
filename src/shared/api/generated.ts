/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * Project management API
 * Project management API
 * OpenAPI spec version: 1.0
 */
import { createInstance } from "./api-instance";
import type { BodyType } from "./api-instance";
export type BoardControllerGetByIdParams = {
  showArchived: boolean;
};

export interface UpdateAccountDto {
  name: string | null;
}

export interface PasswordResetConfirmDto {
  code: string;
}

export interface PasswordResetRequestDto {
  email: string;
  password: string;
}

export interface GetSessionInfoDto {
  email: string;
  exp: number;
  iat: number;
  id: string;
}

export interface EmailExistsError {
  type: string;
}

export interface SignInDto {
  email: string;
  password: string;
}

export interface SignUpDto {
  email: string;
  password: string;
}

export interface UpdateTagDto {
  color?: string | null;
  name?: string;
}

export interface CreateTagDto {
  boardId: string;
  color?: string | null;
  name: string;
}

export interface UpdateCardDto {
  description?: string | null;
  dueDateTime?: string | null;
  isArchived?: boolean | null;
  name?: string | null;
}

export interface AddRemoveTagDto {
  tagId: string;
}

export interface DetachFileDto {
  filename: string;
}

export interface AttachFilesDto {
  files: Blob[];
}

export interface CreateCardDto {
  description?: string | null;
  dueDateTime?: string | null;
  listId: string;
  name: string;
}

export interface UpdateListDto {
  isArchived?: boolean | null;
  name?: string | null;
}

export interface CreateListDto {
  boardId: string;
  name: string;
}

export interface UpdateBoardDto {
  isArchived?: boolean;
  name?: string;
}

export interface MoveCardDto {
  cardId: string;
  fromIndex: number;
  fromListId: string;
  toIndex: number;
  toListId: string;
}

export interface MoveListDto {
  boardId: string;
  fromIndex: number;
  listId: string;
  toIndex: number;
}

export interface FileDto {
  displayName?: string | null;
  extension: string;
  id: string;
  name: string;
  path: string;
  /** File size in kb */
  size: number;
}

export interface TagDto {
  boardId: string;
  color?: string | null;
  id: string;
  name: string;
}

export interface BoardWithDetailsDto {
  id: string;
  isArchived: boolean;
  lists: ListDto[];
  name: string;
  projectId: string;
  tags: TagDto[];
}

export interface CardDto {
  description: string | null;
  dueDateTime: string;
  files: FileDto[];
  id: string;
  index: number;
  isArchived: boolean;
  listId: string;
  name: string;
  tags: TagDto[];
}

export interface ListDto {
  boardId: string;
  cards: CardDto[];
  id: string;
  index: number;
  isArchived: boolean;
  name: string;
}

export interface CreateBoardDto {
  name: string;
  projectId: string;
}

export type UpdateProjectDtoDefaultRole =
  | (typeof UpdateProjectDtoDefaultRole)[keyof typeof UpdateProjectDtoDefaultRole]
  | null;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UpdateProjectDtoDefaultRole = {
  OBSERVER: "OBSERVER",
  MEMBER: "MEMBER",
  ADMIN: "ADMIN",
} as const;

export interface UpdateProjectDto {
  defaultRole?: UpdateProjectDtoDefaultRole;
  name?: string | null;
}

export interface BoardDto {
  id: string;
  isArchived: boolean;
  name: string;
  projectId: string;
}

export interface ProjectWithDetailsDto {
  boards: BoardDto[];
  members: ProjectMemberWithDetailsDto[];
  project: ProjectDto;
}

export type ProjectMemberWithDetailsDtoRole =
  (typeof ProjectMemberWithDetailsDtoRole)[keyof typeof ProjectMemberWithDetailsDtoRole];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ProjectMemberWithDetailsDtoRole = {
  OBSERVER: "OBSERVER",
  MEMBER: "MEMBER",
  ADMIN: "ADMIN",
} as const;

export interface ProfileDto {
  avatarImg: string | null;
  email: string;
  name: string | null;
  userId: string;
}

export interface ProjectMemberWithDetailsDto {
  profile: ProfileDto;
  role: ProjectMemberWithDetailsDtoRole;
}

export type ProjectMemberDtoRole =
  (typeof ProjectMemberDtoRole)[keyof typeof ProjectMemberDtoRole];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ProjectMemberDtoRole = {
  OBSERVER: "OBSERVER",
  MEMBER: "MEMBER",
  ADMIN: "ADMIN",
} as const;

export interface ProjectMemberDto {
  projectId: string;
  role: ProjectMemberDtoRole;
  userId: string;
}

export type ProjectDtoDefaultRole =
  (typeof ProjectDtoDefaultRole)[keyof typeof ProjectDtoDefaultRole];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ProjectDtoDefaultRole = {
  OBSERVER: "OBSERVER",
  MEMBER: "MEMBER",
  ADMIN: "ADMIN",
} as const;

export interface ProjectDto {
  defaultRole: ProjectDtoDefaultRole;
  id: string;
  inviteLink: string | null;
  isArchived: boolean;
  name: string;
}

export interface CreateProjectDto {
  name: string;
}

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const projectControllerCreate = (
  createProjectDto: BodyType<CreateProjectDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ProjectDto>(
    {
      url: `/api/projects`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createProjectDto,
    },
    options,
  );
};

export const projectControllerGet = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ProjectDto[]>(
    { url: `/api/projects`, method: "GET" },
    options,
  );
};

export const projectControllerJoin = (
  inviteLink: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ProjectMemberDto>(
    { url: `/api/projects/join/${inviteLink}`, method: "POST" },
    options,
  );
};

export const projectControllerGetById = (
  id: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ProjectWithDetailsDto>(
    { url: `/api/projects/${id}`, method: "GET" },
    options,
  );
};

export const projectControllerUpdate = (
  id: string,
  updateProjectDto: BodyType<UpdateProjectDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ProjectDto>(
    {
      url: `/api/projects/${id}`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: updateProjectDto,
    },
    options,
  );
};

export const projectLinkControllerGenerate = (
  id: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ProjectDto>(
    { url: `/api/project-link/generate/${id}`, method: "PATCH" },
    options,
  );
};

export const projectLinkControllerRemove = (
  id: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ProjectDto>(
    { url: `/api/project-link/remove/${id}`, method: "PATCH" },
    options,
  );
};

export const boardControllerCreate = (
  createBoardDto: BodyType<CreateBoardDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<BoardDto>(
    {
      url: `/api/boards`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createBoardDto,
    },
    options,
  );
};

export const boardControllerGetByCardId = (
  id: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<BoardWithDetailsDto>(
    { url: `/api/boards/by-card/${id}`, method: "GET" },
    options,
  );
};

export const boardControllerGetById = (
  id: string,
  params: BoardControllerGetByIdParams,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<BoardWithDetailsDto>(
    { url: `/api/boards/${id}`, method: "GET", params },
    options,
  );
};

export const boardControllerUpdate = (
  id: string,
  updateBoardDto: BodyType<UpdateBoardDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<BoardDto>(
    {
      url: `/api/boards/${id}`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: updateBoardDto,
    },
    options,
  );
};

export const boardControllerMoveList = (
  moveListDto: BodyType<MoveListDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/api/boards/move-list`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: moveListDto,
    },
    options,
  );
};

export const boardControllerMoveCard = (
  moveCardDto: BodyType<MoveCardDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/api/boards/move-card`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: moveCardDto,
    },
    options,
  );
};

export const listControllerCreate = (
  createListDto: BodyType<CreateListDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ListDto>(
    {
      url: `/api/lists`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createListDto,
    },
    options,
  );
};

export const listControllerUpdate = (
  id: string,
  updateListDto: BodyType<UpdateListDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ListDto>(
    {
      url: `/api/lists/${id}`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: updateListDto,
    },
    options,
  );
};

export const cardControllerCreate = (
  createCardDto: BodyType<CreateCardDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<CardDto>(
    {
      url: `/api/cards`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createCardDto,
    },
    options,
  );
};

export const cardControllerAttachFile = (
  id: string,
  attachFilesDto: BodyType<AttachFilesDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  const formData = new FormData();
  attachFilesDto.files.forEach((value) => formData.append("files", value));

  return createInstance<CardDto>(
    {
      url: `/api/cards/files/${id}`,
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    },
    options,
  );
};

export const cardControllerDetachFile = (
  id: string,
  detachFileDto: BodyType<DetachFileDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/api/cards/files/${id}`,
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      data: detachFileDto,
    },
    options,
  );
};

export const cardControllerGetById = (
  id: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<CardDto>(
    { url: `/api/cards/${id}`, method: "GET" },
    options,
  );
};

export const cardControllerUpdate = (
  id: string,
  updateCardDto: BodyType<UpdateCardDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<CardDto>(
    {
      url: `/api/cards/${id}`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: updateCardDto,
    },
    options,
  );
};

export const cardControllerAddTag = (
  id: string,
  addRemoveTagDto: BodyType<AddRemoveTagDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<CardDto>(
    {
      url: `/api/cards/add-tag/${id}`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: addRemoveTagDto,
    },
    options,
  );
};

export const cardControllerRemoveTag = (
  id: string,
  addRemoveTagDto: BodyType<AddRemoveTagDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<CardDto>(
    {
      url: `/api/cards/remove-tag/${id}`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: addRemoveTagDto,
    },
    options,
  );
};

export const tagControllerCreate = (
  createTagDto: BodyType<CreateTagDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<TagDto>(
    {
      url: `/api/tags`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createTagDto,
    },
    options,
  );
};

export const tagControllerGetByBoardId = (
  id: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<TagDto[]>(
    { url: `/api/tags/by-board/${id}`, method: "GET" },
    options,
  );
};

export const tagControllerUpdate = (
  id: string,
  updateTagDto: BodyType<UpdateTagDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<TagDto>(
    {
      url: `/api/tags/${id}`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: updateTagDto,
    },
    options,
  );
};

export const tagControllerDelete = (
  id: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/api/tags/${id}`, method: "DELETE" },
    options,
  );
};

export const authControllerSignUp = (
  signUpDto: BodyType<SignUpDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/api/auth/sign-up`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: signUpDto,
    },
    options,
  );
};

export const authControllerSignIn = (
  signInDto: BodyType<SignInDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/api/auth/sign-in`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: signInDto,
    },
    options,
  );
};

export const authControllerSignOut = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/api/auth/sign-out`, method: "POST" },
    options,
  );
};

export const authControllerGetSessionInfo = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<GetSessionInfoDto>(
    { url: `/api/auth/session`, method: "GET" },
    options,
  );
};

export const authControllerPasswordResetReq = (
  passwordResetRequestDto: BodyType<PasswordResetRequestDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/api/auth/password-reset/request`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: passwordResetRequestDto,
    },
    options,
  );
};

export const authControllerPasswordResetConfirm = (
  passwordResetConfirmDto: BodyType<PasswordResetConfirmDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/api/auth/password-reset/confirm`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: passwordResetConfirmDto,
    },
    options,
  );
};

export const usersControllerGetProfileByUserId = (
  id: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ProfileDto>(
    { url: `/api/users/${id}`, method: "GET" },
    options,
  );
};

export const usersControllerUpdateProfile = (
  id: string,
  updateAccountDto: BodyType<UpdateAccountDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ProfileDto>(
    {
      url: `/api/users/${id}`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: updateAccountDto,
    },
    options,
  );
};

export const usersControllerGetProfile = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ProfileDto>(
    { url: `/api/users`, method: "GET" },
    options,
  );
};

export type ProjectControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof projectControllerCreate>>
>;
export type ProjectControllerGetResult = NonNullable<
  Awaited<ReturnType<typeof projectControllerGet>>
>;
export type ProjectControllerJoinResult = NonNullable<
  Awaited<ReturnType<typeof projectControllerJoin>>
>;
export type ProjectControllerGetByIdResult = NonNullable<
  Awaited<ReturnType<typeof projectControllerGetById>>
>;
export type ProjectControllerUpdateResult = NonNullable<
  Awaited<ReturnType<typeof projectControllerUpdate>>
>;
export type ProjectLinkControllerGenerateResult = NonNullable<
  Awaited<ReturnType<typeof projectLinkControllerGenerate>>
>;
export type ProjectLinkControllerRemoveResult = NonNullable<
  Awaited<ReturnType<typeof projectLinkControllerRemove>>
>;
export type BoardControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof boardControllerCreate>>
>;
export type BoardControllerGetByCardIdResult = NonNullable<
  Awaited<ReturnType<typeof boardControllerGetByCardId>>
>;
export type BoardControllerGetByIdResult = NonNullable<
  Awaited<ReturnType<typeof boardControllerGetById>>
>;
export type BoardControllerUpdateResult = NonNullable<
  Awaited<ReturnType<typeof boardControllerUpdate>>
>;
export type BoardControllerMoveListResult = NonNullable<
  Awaited<ReturnType<typeof boardControllerMoveList>>
>;
export type BoardControllerMoveCardResult = NonNullable<
  Awaited<ReturnType<typeof boardControllerMoveCard>>
>;
export type ListControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof listControllerCreate>>
>;
export type ListControllerUpdateResult = NonNullable<
  Awaited<ReturnType<typeof listControllerUpdate>>
>;
export type CardControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof cardControllerCreate>>
>;
export type CardControllerAttachFileResult = NonNullable<
  Awaited<ReturnType<typeof cardControllerAttachFile>>
>;
export type CardControllerDetachFileResult = NonNullable<
  Awaited<ReturnType<typeof cardControllerDetachFile>>
>;
export type CardControllerGetByIdResult = NonNullable<
  Awaited<ReturnType<typeof cardControllerGetById>>
>;
export type CardControllerUpdateResult = NonNullable<
  Awaited<ReturnType<typeof cardControllerUpdate>>
>;
export type CardControllerAddTagResult = NonNullable<
  Awaited<ReturnType<typeof cardControllerAddTag>>
>;
export type CardControllerRemoveTagResult = NonNullable<
  Awaited<ReturnType<typeof cardControllerRemoveTag>>
>;
export type TagControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof tagControllerCreate>>
>;
export type TagControllerGetByBoardIdResult = NonNullable<
  Awaited<ReturnType<typeof tagControllerGetByBoardId>>
>;
export type TagControllerUpdateResult = NonNullable<
  Awaited<ReturnType<typeof tagControllerUpdate>>
>;
export type TagControllerDeleteResult = NonNullable<
  Awaited<ReturnType<typeof tagControllerDelete>>
>;
export type AuthControllerSignUpResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignUp>>
>;
export type AuthControllerSignInResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignIn>>
>;
export type AuthControllerSignOutResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignOut>>
>;
export type AuthControllerGetSessionInfoResult = NonNullable<
  Awaited<ReturnType<typeof authControllerGetSessionInfo>>
>;
export type AuthControllerPasswordResetReqResult = NonNullable<
  Awaited<ReturnType<typeof authControllerPasswordResetReq>>
>;
export type AuthControllerPasswordResetConfirmResult = NonNullable<
  Awaited<ReturnType<typeof authControllerPasswordResetConfirm>>
>;
export type UsersControllerGetProfileByUserIdResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerGetProfileByUserId>>
>;
export type UsersControllerUpdateProfileResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerUpdateProfile>>
>;
export type UsersControllerGetProfileResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerGetProfile>>
>;
