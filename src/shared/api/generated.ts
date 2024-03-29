/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * Project management API
 * Project management API
 * OpenAPI spec version: 1.0
 */
import { createInstance } from "./api-instance";
import type { BodyType } from "./api-instance";
export interface SignInDto {
  email: string;
  password: string;
}

export interface SignUpDto {
  email: string;
  password: string;
}

export type UpdateProjectDtoDefaultRole =
  (typeof UpdateProjectDtoDefaultRole)[keyof typeof UpdateProjectDtoDefaultRole];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UpdateProjectDtoDefaultRole = {
  OBSERVER: "OBSERVER",
  MEMBER: "MEMBER",
  ADMIN: "ADMIN",
} as const;

export interface UpdateProjectDto {
  defaultRole: UpdateProjectDtoDefaultRole;
  id: string;
  name: string;
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
  name: string;
}

export interface CreateProjectDto {
  name: string;
}

export interface UpdateAccountDto {
  name: string | null;
}

export interface AccountDto {
  id: string;
  name: string | null;
  userId: string;
}

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const accountControllerGetAccountByUserId = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<AccountDto>(
    { url: `/api/account`, method: "GET" },
    options,
  );
};

export const accountControllerPatchAccount = (
  updateAccountDto: BodyType<UpdateAccountDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<AccountDto>(
    {
      url: `/api/account`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: updateAccountDto,
    },
    options,
  );
};

export const projectControllerCreateProject = (
  createProjectDto: BodyType<CreateProjectDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ProjectDto>(
    {
      url: `/api/project`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createProjectDto,
    },
    options,
  );
};

export const projectControllerGetProjectById = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>({ url: `/api/project`, method: "GET" }, options);
};

export const projectControllerPatchProject = (
  updateProjectDto: BodyType<UpdateProjectDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ProjectDto>(
    {
      url: `/api/project`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: updateProjectDto,
    },
    options,
  );
};

export const projectControllerDeleteProject = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/api/project`, method: "DELETE" },
    options,
  );
};

export const projectControllerGetUserProjects = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/api/project/user-projects`, method: "GET" },
    options,
  );
};

export const projectControllerCreateInviteLink = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/api/project/create-invite-link`, method: "POST" },
    options,
  );
};

export const projectControllerDeleteInviteLink = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/api/project/delete-invite-link`, method: "POST" },
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
  return createInstance<void>(
    { url: `/api/auth/session`, method: "GET" },
    options,
  );
};

export type AccountControllerGetAccountByUserIdResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerGetAccountByUserId>>
>;
export type AccountControllerPatchAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerPatchAccount>>
>;
export type ProjectControllerCreateProjectResult = NonNullable<
  Awaited<ReturnType<typeof projectControllerCreateProject>>
>;
export type ProjectControllerGetProjectByIdResult = NonNullable<
  Awaited<ReturnType<typeof projectControllerGetProjectById>>
>;
export type ProjectControllerPatchProjectResult = NonNullable<
  Awaited<ReturnType<typeof projectControllerPatchProject>>
>;
export type ProjectControllerDeleteProjectResult = NonNullable<
  Awaited<ReturnType<typeof projectControllerDeleteProject>>
>;
export type ProjectControllerGetUserProjectsResult = NonNullable<
  Awaited<ReturnType<typeof projectControllerGetUserProjects>>
>;
export type ProjectControllerCreateInviteLinkResult = NonNullable<
  Awaited<ReturnType<typeof projectControllerCreateInviteLink>>
>;
export type ProjectControllerDeleteInviteLinkResult = NonNullable<
  Awaited<ReturnType<typeof projectControllerDeleteInviteLink>>
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
