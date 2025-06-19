import { notFound } from "next/navigation"
import { jobs } from "../data"
import JobDetailClient from '@/components/JobDetailClient';

export default async function Page({ params }) {
  const { id } = params;
  const job = jobs.find(job => job.id == id);
  if (!job) {
    notFound();
  }
  return <JobDetailClient job={job} />;
}