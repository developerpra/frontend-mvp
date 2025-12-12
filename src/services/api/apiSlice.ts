import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../config/environment';

export interface VesselOwner {
  vesselOwnerId: number;
  vesselId: number;
  ownerName: string;
  effectiveDate: string | null;
  expirationDate: string | null;
  active: boolean;
}

export interface VesselData {
  vesselId: number;
  vesselName: string;
  vesselType: string;
  vesselCompanyId: number | null;
  vesselCompartmentId: number | null;
  vefUnit: string;
  vesselBallast: string;
  vesselConnectionType: string;
  vesselCode: string;
  lastStrapping: string | null;
  lastDock: string | null;
  vesselGaugeUnit: string;
  vesselVolUnit: string;
  vesselDraftUnit: string;
  grossRegTons: string;
  netRegTons: string;
  lengthOverall: string;
  lbp: string;
  breadth: string;
  draught: string;
  builtYear: string | null;
  builtPlace: string;
  formerNames: string;
  flyingFlag: string;
  manifoldLocation: string;
  vessCapacityLine: string | null;
  vesselCapacity: string | null;
  vesselPhone: string | null;
  vesselEmail: string | null;
  notes: string | null;
  standPipe: string | null;
  strappingChartURL: string | null;
  oceanGoingBarges: boolean;
  active: boolean;
  vesselOwners: VesselOwner[];
}

export interface VesselListItem {
  vesselId: number;
  vesselName: string;
  vesselType: string;
  imoNumber: string;
  active: boolean;
}

export interface VesselListResponse {
  totalItems: number;
  items: VesselListItem[];
}

export interface VesselListParams {
  pageIndex: number;
  pageSize: number;
  VesselName?: string;
  VesselType?: string;
  ImoNumber?: string;
  Active?: boolean;
}

export interface ApiResponse<T> {
  isSuccess: boolean;
  data: T;
  errorCode: string | null;
  errorMessage: string | null;
}

// service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'api', 
  baseQuery: fetchBaseQuery({ 
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      // const token = localStorage.getItem('token');
      // if (token) {
      //   headers.set('authorization', `Bearer ${token}`);
      // }
      return headers;
    },
  }),
  // tags: for caching and invalidation
  tagTypes: ['Vessel'], 
  endpoints: (builder) => ({
    // Get a vessel list
    getVesselList: builder.query<ApiResponse<VesselListResponse>, VesselListParams>({
      query: (params) => ({
        url: '/VesselInformation',
        params,
      }),
      providesTags: ['Vessel'],
    }),
    // Get a vessel by ID
    getVesselInformation: builder.query<ApiResponse<VesselData>, number | string>({
      query: (id) => `/VesselInformation/${id}`, 
      providesTags: (result, error, id) => [{ type: 'Vessel', id }],
    }),
    // query: Get a vessel by ID
    getVessel: builder.query<any, string>({
      query: (id) => `/vessels/${id}`, 
      providesTags: (result, error, id) => [{ type: 'Vessel', id }],
    }),
    // mutation: Update a vessel
    updateVessel: builder.mutation<any, { id: string; data: any }>({
      query: ({ id, data }) => ({
        url: `/vessels/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Vessel', id }],
    }),
    // mutation: Create a vessel
    createVessel: builder.mutation<any, any>({
      query: (data) => ({
        url: '/vessels',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Vessel'],
    }),
  }),
});

export const { 
  useGetVesselQuery, 
  useUpdateVesselMutation, 
  useCreateVesselMutation,
  useGetVesselInformationQuery,
  useGetVesselListQuery
} = apiSlice;
