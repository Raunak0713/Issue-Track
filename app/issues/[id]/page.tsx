import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params : { id : string }
}

const IssueDetailPage = async ({ params } : Props) => {
    const issue = await prisma.issue.findUnique({
        where : { id : params.id}
    })

    if(!issue)
        notFound();
  return (
    <div>
        <p>{issue.title}</p>
        <p>{issue.description}</p>
        <p>Status : {issue.status}</p>
        <p>Created At : {issue.createdAt.toString()}</p>
    </div>
  )
}

export default IssueDetailPage