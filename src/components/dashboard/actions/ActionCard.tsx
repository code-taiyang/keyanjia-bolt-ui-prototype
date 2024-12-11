import React from 'react';
import { Card } from '../../common/Card';

interface ActionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ActionCard({ icon, title, description }: ActionCardProps) {
  return (
    <Card className="p-6" hover>
      <div className="mb-4">{icon}</div>
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </Card>
  );
}